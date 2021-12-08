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

// test()

/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
