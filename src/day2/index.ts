import { test, readInput } from "../utils/index"
import * as os from "os"

type RawInput = string;
const prepareInput = (rawInput: RawInput) => rawInput

const input = prepareInput(readInput())

enum Moves {
  Forward = 'forward',
  Down = 'down',
  Up = 'up',
}

const goA = (input: RawInput) => {
  const moves = input.split(os.EOL).map(m => {
    const value = m.split(' ');
    return {
      [value[0]]: Number(value[1])
    }

  }).slice(0, -1);
  let verticalPos = 0;
  let depth = 0;
  for(const move of moves) {
    const key = Object.keys(move)[0];
    const value = move[key];
    switch (key) {
      case Moves.Forward:
        verticalPos += value;
        break;
      case Moves.Up:
        depth -= value;
        break;
      case Moves.Down:
        depth += value;
        break;
    }
  }
  return verticalPos*depth;
}

const goB = (input: RawInput) => {
  let aim = 0;
  let verticalPos = 0;
  let depth = 0;
  const moves = input.split(os.EOL).map(m => {
    const value = m.split(' ');
    return {
      [value[0]]: Number(value[1])
    }

  }).slice(0, -1);

  for(const move of moves) {
    const key = Object.keys(move)[0];
    const value = move[key];
    switch (key) {
      case Moves.Forward:
        verticalPos += value;
        depth += aim*value;
        break;
      case Moves.Up:
        aim -= value;
        break;
      case Moves.Down:
        aim += value;
        break;
    }
  }
  return verticalPos*depth;
}

/* Tests */

test(goA(input), 1635930)
test(goB(input), 1781819478)

/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
