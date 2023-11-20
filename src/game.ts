import * as box from "./box"
import * as snake from "./snake"
import { Direction } from "./direction"

export type GameState = {
  snake: snake.Snake
  food: box.Box
  dir: Direction
  score: number
}
