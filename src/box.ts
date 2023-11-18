import { Direction } from "./direction"
import { GRID_SIZE } from "./render"
import { randInt } from "./util"

export type Box = { x: number; y: number }

export const create = (x: number, y: number): Box => ({ x, y })
export const eq = (a: Box) => (b: Box) => a.x === b.x && a.y === b.y
export const random = (): Box => create(randInt(GRID_SIZE), randInt(GRID_SIZE))

// next return next box wrt given direction
export const next =
  (b: Box) =>
  (dir: Direction): Box => {
    if (dir === Direction.UP) return create(b.x, b.y == 1 ? 20 : b.y - 1)

    if (dir === Direction.DOWN)
      return create(b.x, b.y == GRID_SIZE ? 1 : b.y + 1)

    if (dir === Direction.RIGHT)
      return create(b.x == GRID_SIZE ? 1 : b.x + 1, b.y)

    if (dir === Direction.LEFT) return create(b.x == 1 ? 20 : b.x - 1, b.y)

    return b
  }
