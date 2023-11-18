import { Box } from "./box"

export const GRID_SIZE = 20

const board = document.getElementById("board")!

const createBox = (box: Box, type: "snake" | "food") => {
  const elm = document.createElement("div")
  elm.classList.add(type + "-box")
  elm.style.gridRowStart = "" + box.y
  elm.style.gridColumnStart = "" + box.x
  return elm
}

export const render = (snake: Box[], food: Box) => {
  for (const b of snake) {
    board.appendChild(createBox(b, "snake"))
  }
  board.appendChild(createBox(food, "food"))
}
