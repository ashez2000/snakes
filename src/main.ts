import "./style.css"

import { GRID_SIZE, render } from "./render"
import { Box, randBox, nextPostion, isSameBox } from "./box"
import { Direction } from "./direction"

let snake: Box[] = [randBox(GRID_SIZE)]
let food: Box = randBox(GRID_SIZE)
let direction = Direction.NONE

const nextSnake = (dir: Direction) => {
  const n = nextPostion(snake[0], dir)
  snake.pop()
  snake.unshift(n)
}

setInterval(() => {
  nextSnake(direction)

  // if consumed food
  if (isSameBox(snake[0], food)) {
    snake.unshift(nextPostion(snake[0], direction))
    food = randBox(GRID_SIZE)
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
