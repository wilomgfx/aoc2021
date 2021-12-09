import { test, readInput } from "../utils/index"
import * as os from "os"
import { sum } from "lodash"

type RawInput = string
const prepareInput = (rawInput: RawInput) => rawInput

const input = prepareInput(readInput())
const testInput = prepareInput(readInput("test-input.txt"))

const bruteForce = (fishes: number[], days: number) => {
  for (let i = 0; i < days; i++) {

    for (let j = 0; j < fishes.length; j++) {
      if (fishes[j] === 0) {
        fishes.push(9);
        fishes[j] = 7;
      }
      fishes[j]--;
    }
  }

  return fishes.length
}

const bigBrain = (fishes: number[], days: number) => {
  const generations = Array.from(Array(9), (v, i) => fishes.filter((n) => n === i).length);
  for (let i = 0; i < days; i++) {
    const genZeroes = generations.shift();
    // @ts-ignore
    generations[6] += genZeroes;
    // @ts-ignore
    generations.push(genZeroes);
  }
  return sum(generations)
}

const goA = (input: RawInput) => {
  const days = 80;
  const fishes = input.trim().split(',').map(Number)
  return bigBrain(fishes, days)
}

const goB = (input: RawInput) => {
  const days = 256;
  const fishes = input.trim().split(',').map(Number)
  // return getEmFishes(fishes, days) // yikes
  return bigBrain(fishes, days)
}

/* Tests */

test(goA(input), 362666)
test(goB(testInput), 26984457539)

/* Results */

console.time("Time p1")
const resultA = goA(input)
console.timeEnd("Time p1")
console.time("Time p2")
const resultB = goB(input)
console.timeEnd("Time p2")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
