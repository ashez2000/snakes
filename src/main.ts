import "./style.css"

import { GRID_SIZE, render } from "./render"
import { Box, randBox, nextPostion } from "./box"
import { Direction } from "./direction"

let snake: Box[] = [randBox(GRID_SIZE)]
let food: Box = randBox(GRID_SIZE)
let direction = Direction.DOWN

const nextSnake = (dir: Direction) => {
  const n = nextPostion(snake[0], dir)
  snake.pop()
  snake.push(n)
}

setInterval(() => {
  nextSnake(direction)
  render(snake, food)
}, 500)
