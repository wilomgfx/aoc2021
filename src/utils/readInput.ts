import { readFileSync } from "fs"
import { sep } from "path"
import * as getCallerFile from "get-caller-file"

export const readInput = (fileName: string = "input.txt") => {
  const file = getCallerFile()
    .split(sep)
    .slice(0, -1)
    .concat(fileName)
    .join(sep)

  return readFileSync(file).toString()
}
