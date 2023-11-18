import "./style.css"

import { GRID_SIZE, render } from "./render"
import { Box, randBox } from "./box"

let snake: Box[] = [randBox(GRID_SIZE)]
let food: Box = randBox(GRID_SIZE)

render(snake, food)
