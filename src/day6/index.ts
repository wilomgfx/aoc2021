import { test, readInput } from "../utils/index"
import * as os from "os"

type RawInput = string
const prepareInput = (rawInput: RawInput) => rawInput

const input = prepareInput(readInput())
const testInput = prepareInput(readInput("test-input.txt"))

const goA = (input: RawInput) => {
  const fishes = testInput.trim().split(',').map(Number)
  for (let i = 0; i < 80; i++) {

    for (let j = 0; j < fishes.length; j++) {
      if (fishes[j] == 0) {
        fishes.push(9);
        fishes[j] = 7;
      }
      fishes[j]--;
    }
  }

  return fishes.length
}

const goB = (input: RawInput) => {
  return
}

/* Tests */

test(goA(testInput), 5934)
// test(goB(testInput))

/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
