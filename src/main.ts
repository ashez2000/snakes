import "./style.css"

import { render } from "./render"
import * as box from "./box"
import { Direction } from "./direction"

let snake: box.Box[] = [box.random()]
let food: box.Box = box.random()
let direction = Direction.NONE

const nextSnake = (dir: Direction) => {
  const n = box.next(snake[0])(dir)
  snake.pop()
  snake.unshift(n)
}

const isHit = (head: box.Box, snake: box.Box[]) =>
  snake.slice(1).map(box.eq(head)).includes(true)

setInterval(() => {
  nextSnake(direction)

  // if consumed food
  if (box.eq(snake[0])(food)) {
    snake.unshift(box.next(snake[0])(direction))
    food = box.random()
  }

  if (isHit(snake[0], snake)) {
    snake = [box.random()]
    food = box.random()
    direction = Direction.NONE
  }

  render(snake, food)
}, 300)

window.addEventListener("keydown", e => {
  switch (e.key) {
    case "ArrowUp":
      direction = Direction.UP
      break
    case "ArrowDown":
      direction = Direction.DOWN
      break
    case "ArrowLeft":
      direction = Direction.LEFT
      break
    case "ArrowRight":
      direction = Direction.RIGHT
      break
  }
})
