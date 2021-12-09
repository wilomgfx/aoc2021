import { test, readInput } from "../utils/index"
import * as os from "os"

type RawInput = string
const prepareInput = (rawInput: RawInput) => rawInput

const input = prepareInput(readInput())
const testInput = prepareInput(readInput("test-input.txt"))

const goA = (input: RawInput) => {
  const diagnostics = input.split(os.EOL)

  return
}

const goB = (input: RawInput) => {
  return
}

/* Tests */

// test(goA(testInput))
// test(goB(testInput))

/* Results */

console.time("Time p1")
const resultA = goA(input)
console.timeEnd("Time p1")
console.time("Time p2")
const resultB = goB(input)
console.timeEnd("Time p2")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
