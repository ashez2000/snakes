import { Box } from "./box"
import { GameState } from "./game"

export const GRID_SIZE = 20

const board = document.getElementById("board")!
const score = document.getElementById("score")!

const createBox = (box: Box, type: "snake" | "food") => {
  const elm = document.createElement("div")
  elm.classList.add(type + "-box")
  elm.style.gridRowStart = "" + box.y
  elm.style.gridColumnStart = "" + box.x
  return elm
}

export const render = (state: GameState) => {
  board.innerHTML = ""

  score.innerText = "" + state.score

  // snake
  board.appendChild(createBox(state.snake.head, "snake"))
  for (const b of state.snake.body) {
    board.appendChild(createBox(b, "snake"))
  }

  board.appendChild(createBox(state.food, "food"))
}
