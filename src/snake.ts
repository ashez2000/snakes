import * as box from "./box"
import { Direction } from "./direction"

export type Snake = {
  head: box.Box
  body: box.Box[]
}

export const create = (head: box.Box, body: box.Box[] = []): Snake => ({
  head,
  body,
})

export const move =
  (s: Snake) =>
  (dir: Direction): Snake =>
    create(box.next(s.head)(dir), [s.head, ...s.body].slice(0, -1))

/** update adds a new head to the snake */
export const update =
  (s: Snake) =>
  (head: box.Box): Snake =>
    create(head, [s.head, ...s.body])

export const isHit = (s: Snake) => s.body.map(box.eq(s.head)).includes(true)
