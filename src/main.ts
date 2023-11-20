import "./style.css"

import { render } from "./render"
import * as box from "./box"
import * as snake from "./snake"
import { Direction } from "./direction"
import { GameState } from "./game"

// mutable state
let state: GameState = {
  snake: snake.create(box.random()),
  food: box.random(),
  dir: Direction.NONE,
  score: 0,
}

setInterval(() => {
  state.snake = snake.move(state.snake)(state.dir)

  if (snake.isHit(state.snake)) {
    console.log("isHit")
    state = {
      snake: snake.create(box.random()),
      food: box.random(),
      dir: Direction.NONE,
      score: 0,
    }
  }

  // if consumed food
  if (box.eq(state.snake.head)(state.food)) {
    state.snake = snake.update(state.snake)(state.food)
    state.food = box.random()
    state.score += 1
  }

  render(state)
}, 300)

window.addEventListener("keydown", e => {
  switch (e.key) {
    case "ArrowUp":
      state.dir = Direction.UP
      break
    case "ArrowDown":
      state.dir = Direction.DOWN
      break
    case "ArrowLeft":
      state.dir = Direction.LEFT
      break
    case "ArrowRight":
      state.dir = Direction.RIGHT
      break
  }
})
