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
  const mapIndex = 0
  console.log(`Num: ${map[mapIndex][numIndex]}`)
  if (isCornerCase(rowLength, numIndex, "start")) {
    console.log("begining of row")
    // check for rowIndex, if 0 only (down, right)
    const rightNumber = map[mapIndex][numIndex + 1]
    const downNumber = map[mapIndex + 1][numIndex]
    console.log(`right ${rightNumber} down ${downNumber}`)
    // otherwise numbers (up, down, right)
  }
  if (isCornerCase(rowLength, numIndex, "end")) {
    console.log("end of row")
    // check for rowIndex, if 0 only (down, left)
    // otherwise (up, down, left)
  }
}

const goA = (input: RawInput) => {
  const inputSplit = testInput.trim().split(os.EOL)
  getAdjacentNumbers(inputSplit, 0)
  console.log("------")
  getAdjacentNumbers(inputSplit, 9)
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
