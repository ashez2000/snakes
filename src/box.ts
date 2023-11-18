import { randInt } from "./util"

export type Box = {
  x: number
  y: number
}

export const randBox = (range: number): Box => ({
  x: randInt(range),
  y: randInt(range),
})
