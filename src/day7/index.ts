import { readInput, test } from "../utils/index"

type RawInput = string
const prepareInput = (rawInput: RawInput) => rawInput

const input = prepareInput(readInput())

type StepFunc = (n: number) => number

const calculateTotalFuel = (crabs: number[], crabIndex: number, step: StepFunc = n => n): number => {
  return crabs.reduce((acc, c) => acc + step(Math.abs(crabIndex - c)), 0);
}



const getMean = (crabs: number[]) => crabs.reduce((acc, c) => acc + c) / crabs.length;

const getMedian = (crabs: number[]) => crabs[Math.floor(crabs.length / 2)]

const goA = (input: RawInput) => {
  const crabs = input.trim().split(',').map(Number).sort((a, b) => a - b)
  const median = getMedian(crabs)
  return calculateTotalFuel(crabs, median);
}

const goB = (input: RawInput) => {
  const crabs = input.trim().split(',').map(Number).sort((a, b) => a - b)
  const mean = getMean(crabs)
  const gauss = (n: number) => (n * (n + 1)) / 2;
  return Math.min(calculateTotalFuel(crabs, Math.ceil(mean), gauss), calculateTotalFuel(crabs, Math.floor(mean), gauss));
}

/* Tests */

test(goA(input), 343468)
test(goB(input), 96086265)

/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
