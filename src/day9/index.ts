import { test, readInput } from "../utils/index"
import * as os from "os"
import { sum } from "lodash"

type RawInput = string
const prepareInput = (rawInput: RawInput) => rawInput

const input = prepareInput(readInput())
const testInput = prepareInput(readInput("test-input.txt"))

const getRowLength = (map: string[]) => map[0].length
const getNumOfRows = (map: string[]) => map.length

const isCornerCase = (rowLength: number, numIndex: number, side: string) => {
  if (side === "start") return numIndex === 0
  return numIndex === rowLength - 1
}

const getAdjacentNumbers = (map: string[], rowIndex: number, numIndex: number) => {
  const rowLength = getRowLength(map)
  const numOfRows = getNumOfRows(map)
  let rightNumber = '';
  let leftNumber = '';
  let downNumber = '';
  let upNumber = '';
  // top of map
  if(rowIndex !== 0) {
    upNumber = map[rowIndex -1][numIndex]
  }
  //end of map
  if(rowIndex !== numOfRows -1) {
    downNumber = map[rowIndex + 1][numIndex]
  }
  if (isCornerCase(rowLength, numIndex, "start")) {
    rightNumber = map[rowIndex][numIndex + 1]
    // otherwise numbers (up, down, right)
  }
  else if (isCornerCase(rowLength, numIndex, "end")) {
    leftNumber = map[rowIndex][numIndex -1]
  } else {
    rightNumber = map[rowIndex][numIndex + 1]
    leftNumber = map[rowIndex][numIndex - 1]

  }
  // console.log(`right ${rightNumber} left ${leftNumber} down ${downNumber} up ${upNumber}`)
  return [rightNumber, leftNumber, downNumber, upNumber].filter(Boolean).map(Number)
}

const isNumberIsLowerThanAdjacents = (adjacentNumbers: number[], num: number) => {
  return adjacentNumbers.every(n => n > num)
}

const goA = (input: RawInput) => {
  const map = input.trim().split(os.EOL)
  const numOfRows = getNumOfRows(map)
  const rowLength = getRowLength(map)
  const lowNumbers = []
  // getAdjacentNumbers(map, 0)
  // console.log("------")
  // getAdjacentNumbers(map, 1)
  // console.log("------")
  // getAdjacentNumbers(map, 9)
  // console.log("------")
  for(let rowIndex = 0; rowIndex < numOfRows; rowIndex++) {
    // console.log(map[rowIndex])
    for(let numIndex = 0; numIndex < rowLength; numIndex++) {
      const num = Number(map[rowIndex][numIndex]);
      // console.log(num)

      const adjacentNumbers = getAdjacentNumbers(map, rowIndex, numIndex);
      // console.log(adjacentNumbers)
      if(isNumberIsLowerThanAdjacents(adjacentNumbers, num))
        lowNumbers.push(num)
    }
  }

  return sum(lowNumbers.map(ln => ln+1));
}


const goB = (input: RawInput) => {
  const map = input.trim().split(os.EOL)

  const NOT_A_BASIN_HEIGHT = 9

  const numOfRows = getNumOfRows(map)
  const rowLength = getRowLength(map)
  const lowNumbers = []

  for(let rowIndex = 0; rowIndex < numOfRows; rowIndex++) {

    for(let numIndex = 0; numIndex < rowLength; numIndex++) {
      const num = Number(map[rowIndex][numIndex]);

      const adjacentNumbers = getAdjacentNumbers(map, rowIndex, numIndex);

      if(isNumberIsLowerThanAdjacents(adjacentNumbers, num))
        lowNumbers.push(num)
    }
  }
  return 2
}

/* Tests */

test(goA(testInput), 15)
test(goB(testInput), 1134)
// test(goA(input), 633)
// test(goB(input), 15)

/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
