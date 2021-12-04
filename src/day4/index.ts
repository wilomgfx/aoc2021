import { test, readInput } from "../utils/index"
import * as os from "os"
import * as _ from "lodash"
import { basename } from "path"

type RawInput = string
const prepareInput = (rawInput: RawInput) => rawInput

const input = prepareInput(readInput())

const getNextDraws = (draws: number[], drawNumber: number) => {
  // console.log(`drawNumber ${drawNumber}`)
  const nextSlice = 6 * (drawNumber - 1)
  if (drawNumber === 1) {
    return draws.slice(0, 5)
  }
  if (drawNumber === 2) {
    return draws.slice(5, drawNumber * 6 - 1)
  }
  console.log(`nextSlice ${nextSlice}`)
  return draws.slice(nextSlice - 1, nextSlice + 5)
}

const goA = (input: RawInput) => {
  let [firstRow] = input.split(os.EOL)
  let draws = firstRow.split(",").map(Number)
  // console.log(draws)
  const boards = input
    .split(os.EOL)
    .slice(1)
    .map((b) => {
      if (b != "") {
        return b.trim()
      }
    })
    .filter(Boolean)
  const playBoards = _.chunk(boards, 5)
  const firstDraw = getNextDraws(draws, 1)
  console.log(
    firstDraw,
    getNextDraws(draws, 2),
    getNextDraws(draws, 3),
    getNextDraws(draws, 4),
    getNextDraws(draws, 5),
  )
  for (const board of playBoards) {
    // console.log(board)
  }
  return
}

const goB = (input: RawInput) => {
  return
}

/* Tests */

// test()

/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
