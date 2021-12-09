import { test, readInput } from "../utils/index"
import * as os from "os"

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

const getAdjacentNumbers = (map: string[], numIndex: number) => {
  const rowLength = getRowLength(map)
  const numOfRows = getNumOfRows(map)
  const rowIndex = 4
  console.log(`Num: ${map[rowIndex][numIndex]}`)
  let rightNumber = '';
  let leftNumber = '';
  let downNumber = '';
  let upNumber = '';
  // top of map
  // @ts-ignore
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
  console.log(`right ${rightNumber} left ${leftNumber} down ${downNumber} up ${upNumber}`)
}

const goA = (input: RawInput) => {
  const inputSplit = testInput.trim().split(os.EOL)
  getAdjacentNumbers(inputSplit, 0)
  console.log("------")
  getAdjacentNumbers(inputSplit, 1)
  console.log("------")
  getAdjacentNumbers(inputSplit, 9)
  console.log("------")
  return 2
}

const goB = (input: RawInput) => {
  return
}

/* Tests */

test(goA(input), 15)
// test(goB(input), 15)

/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
