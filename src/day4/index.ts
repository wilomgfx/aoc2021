import { test, readInput } from "../utils/index"
import * as os from "os"
import * as _ from "lodash"
import { basename } from "path"

type RawInput = string
const prepareInput = (rawInput: RawInput) => rawInput

const input = prepareInput(readInput())

const getNextDraw = (draws: number[], drawNumber: number) => {
  const nextSlice = 6 * (drawNumber - 1)
  if (drawNumber === 1) {
    return draws.slice(0, 5)
  }
  if (drawNumber === 2) {
    return draws.slice(5, drawNumber * 6 - 1)
  }
  return draws.slice(nextSlice - 1, nextSlice + 5)
}

const checkForValidNumbersInRow = (
  draw: number[],
  board: (string | undefined)[],
  boardIndex: number,
) => {
  const rowsMap: Map<number, { [x: number]: boolean }[]> = new Map()
  const rows = []
  for (const row of board) {
    const parsedRow = row!.split(" ").filter(Boolean).map(Number)
    console.log(parsedRow)
    for (const rowNum of parsedRow) {
      if (draw.includes(Number(rowNum))) {
        rows.push({ [rowNum]: true })
      }
      if (!rowsMap.has(boardIndex)) rowsMap.set(boardIndex, rows)
    }
  }
  console.log(rowsMap)
  return rowsMap
}

const checkForValidNumbersInCol = (
  draw: number[],
  board: (string | undefined)[],
  boardIndex: number,
) => {
  const colsMap: Map<number, { [x: number]: boolean }[]> = new Map()
  const cols = []
  for (const [index, row] of board.entries()) {
    const parsedRow = row!.split(" ").filter(Boolean).map(Number)

    const col = parsedRow![index]
    console.log(col)
    if (draw.includes(col)) {
      cols.push({ [col]: true })
    }
    if (!colsMap.has(boardIndex)) colsMap.set(boardIndex, cols)
  }
  console.log(colsMap)
  return colsMap
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
  // const firstDraw = getNextDraw(draws, 1)
  // console.log(
  //   firstDraw,
  //   getNextDraws(draws, 2),
  //   getNextDraws(draws, 3),
  //   getNextDraws(draws, 4),
  //   getNextDraws(draws, 5),
  //   getNextDraws(draws, 6),
  // )
  let gameNumber = 1
  for (const [boardIndex, board] of playBoards.entries()) {
    // console.log(board)
    const nextDraw = getNextDraw(draws, gameNumber)
    // console.log(nextDraw)
    checkForValidNumbersInRow(nextDraw, board, boardIndex)
    // checkForValidNumbersInCol(nextDraw, board, boardIndex)
    gameNumber++
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
