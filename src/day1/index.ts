import { test, readInput } from "../utils/index"
import * as os from 'os';
import { sum } from "../utils"

type RawInput = string;
const prepareInput = (rawInput: RawInput): RawInput => rawInput

const input = prepareInput(readInput())

const goA = (input: RawInput) => {
  const measurements = input.split(os.EOL).map(Number)
  let numOfTimesIncreased = 0;
  for(const [i, v] of measurements.entries()) {
    const previousMeasurement = measurements[i-1];

    if(previousMeasurement) {
      if (v > previousMeasurement) {
        numOfTimesIncreased++;
      }
    }
  }
  return numOfTimesIncreased
}

const goB = (input: RawInput) => {
  const measurements = input.split(os.EOL).map(Number)
  const groupCounts = measurements.slice(0, -2).map((_, i) => sum(measurements.slice(i, i + 3)));
  return groupCounts.slice(1).filter((m, i) => m > groupCounts[i]).length;
}

/* Tests */

test(goA(input), 1766)
test(goB(input), 1797)

/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
