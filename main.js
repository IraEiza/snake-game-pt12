import  { Snake } from "./snake.js"
import { Food } from "./food.js"

var snake = new Snake(4, 5)
snake.draw()

var food = new Food(6, 6)
food.draw()

window.addEventListener('keydown', function(e) {
  switch (e.key) {
    case 'w':
      snake.direction = 'up'
      break
    case 'a':
      snake.direction = 'left'
      break
    case 's':
      snake.direction = 'down'
      break
    case 'd':
      snake.direction = 'right'
      break
  }
})

var moovement = setInterval( gameLoop, 100)

function gameLoop() {
  snake.updateCoords()
  snake.erase()
  snake.draw()
  if(snake.x === food.x && snake.y === food.y) {
    food.respawn()
  }
}