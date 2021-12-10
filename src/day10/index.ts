import { test, readInput } from "../utils/index"
import * as os from "os"

type RawInput = string
const prepareInput = (rawInput: RawInput) => rawInput

const input = prepareInput(readInput())
const testInput = prepareInput(readInput("test-input.txt"))

const CHAR_POINT_MAP = new Map<string, number>()
CHAR_POINT_MAP.set(")", 3)
CHAR_POINT_MAP.set("]", 57)
CHAR_POINT_MAP.set("}", 1197)
CHAR_POINT_MAP.set(">", 25137)

const goA = (input: RawInput) => {
  const instructions = input.trim().split(os.EOL)
  console.log(instructions)

  return 2
}

const goB = (input: RawInput) => {
  return
}

/* Tests */

test(goA(testInput), 26397)
// test(goB(testInput))

/* Results */

console.time("Time p1")
const resultA = goA(testInput)
console.timeEnd("Time p1")
console.time("Time p2")
const resultB = goB(testInput)
console.timeEnd("Time p2")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
