import { Direction } from "./direction"
import { GRID_SIZE } from "./render"
import { randInt } from "./util"

export type Box = {
  x: number
  y: number
}

export const randBox = (range: number): Box => ({
  x: randInt(range),
  y: randInt(range),
})

export const nextPostion = (box: Box, dir: Direction): Box => {
  switch (dir) {
    case Direction.UP:
      return {
        x: box.x,
        y: box.y == 1 ? 20 : box.y - 1,
      }

    case Direction.DOWN:
      return {
        x: box.x,
        y: box.y == GRID_SIZE ? 1 : box.y + 1,
      }

    case Direction.RIGHT:
      return {
        x: box.x == GRID_SIZE ? 1 : box.x + 1,
        y: box.y,
      }

    case Direction.LEFT:
      return {
        x: box.x == 1 ? 20 : box.x - 1,
        y: box.y,
      }

    case Direction.NONE:
      return box
    default:
      return box
  }
}
