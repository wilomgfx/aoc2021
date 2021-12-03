import * as _ from 'lodash';
import { test, readInput } from "../utils/index"
import * as os from "os"

type RawInput = string;
const prepareInput = (rawInput: RawInput) => rawInput

const input = prepareInput(readInput())

const mostFrequent = (array: number[]) => {
  // @ts-ignore
  const max0 = _.maxBy([_.countBy(array, Math.max)], '0')['0']

  // @ts-ignore
  const max1 = _.maxBy([_.countBy(array, Math.max)], '1')['1']

  return max1 > max0 ? 1 : 0
}
const rarest = (array: any) =>  {
  // @ts-ignore
  const min0 = _.minBy([_.countBy(array, Math.min)], '0')['0']

  // @ts-ignore
  const min1 = _.minBy([_.countBy(array, Math.min)], '1')['1']

  return min1 > min0 ? 0 : 1
}

// const getBitsThatStartWith = (array: number[], bit: number) : number[] => {
//   return array
// }

const goA = (input: RawInput) => {
  const diagnostics = input.split(os.EOL)
  const firstBits = [];
  const secondBits = [];
  const thirdBits = [];
  const fourthBits = [];
  const fifthBits = [];
  const sixthBits = [];
  const seventhBits = [];
  const eightBits = [];
  const nineBits = [];
  const tenBits = [];
  const elevenBits = [];
  const twelveBits = [];
  const gammaResults = [];
  const epsilonResults = [];
  for(const diag of diagnostics) {
    const [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve] = diag.split('').map(Number);
    // console.log(one, two, three, four, five, seven, eight, nine, ten, eleven, twelve)
    firstBits.push(one)
    secondBits.push(two)
    thirdBits.push(three)
    fourthBits.push(four)
    fifthBits.push(five)
    sixthBits.push(six)
    seventhBits.push(seven)
    eightBits.push(eight)
    nineBits.push(nine)
    tenBits.push(ten)
    elevenBits.push(eleven)
    twelveBits.push(twelve)
  }
  gammaResults.push(mostFrequent(firstBits),
    mostFrequent(secondBits),
    mostFrequent(thirdBits),
    mostFrequent(fourthBits),
    mostFrequent(fifthBits),
    mostFrequent(sixthBits),
    mostFrequent(seventhBits),
    mostFrequent(eightBits),
    mostFrequent(nineBits),
    mostFrequent(tenBits),
    mostFrequent(elevenBits),
    mostFrequent(twelveBits))
  epsilonResults.push(rarest(firstBits),
    rarest(secondBits),
    rarest(thirdBits),
    rarest(fourthBits),
    rarest(fifthBits),
    rarest(sixthBits),
    rarest(seventhBits),
    rarest(eightBits),
    rarest(nineBits),
    rarest(tenBits),
    rarest(elevenBits),
    rarest(twelveBits))

  const gammaRate = parseInt(gammaResults.join(''), 2)

  const epsilonRate = parseInt(epsilonResults.join(''), 2)

  return gammaRate * epsilonRate
}

const goB = (input: RawInput) => {
  const diagnostics = input.split(os.EOL)

  const columns = (list: string[]) => {
    console.log(list)
    return list.reduce(
      (acc: any, item: string) => {
        const chars = item.split("");
        const columns = acc;
        for (let i = 0; i < chars.length; i++) {
          columns[i].push(chars[i]);
        }
        return acc;
      },
      new Array(input[0].length).fill(0).map(() => new Array())
    );
  };

  const group = (list: string[]) =>
    list.reduce((acc, item) => {
      // @ts-ignore
      if (acc[item] === undefined) acc[item] = 0;
      else { // @ts-ignore
        acc[item]++;
      }
      return acc;
    }, {});


  // @ts-ignore
  const oxygen = (list) => {
    let numbers = list.slice(0);
    let index = 0;
    while (numbers.length > 1) {
      const val = columns(numbers).map(group);
      if (val[index]["0"] > val[index]["1"]) {
        // @ts-ignore
        numbers = numbers.filter((line) => line[index] === "0");
      } else {
        // @ts-ignore
        numbers = numbers.filter((line) => line[index] === "1");
      }
      index++;
    }
    return parseInt(numbers[0], 2);
  };
  // @ts-ignore
  const co2 = (list) => {
    let numbers = list.slice(0);
    let index = 0;
    while (numbers.length > 1) {
      const val = columns(numbers).map(group);
      if (val[index]["1"] < val[index]["0"]) {
        // @ts-ignore
        numbers = numbers.filter((line) => line[index] === "1");
      } else {
        // @ts-ignore
        numbers = numbers.filter((line) => line[index] === "0");
      }
      index++;
    }
    return parseInt(numbers[0], 2);
  };
  return oxygen(diagnostics) * co2(diagnostics)
}

/* Tests */

test(goA(input), 3429254)
test(goB(input), 5410338)

/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
