
var snake = new Snake(4, 5)
snake.draw()

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
  snake.updateCoords()
  snake.erase()
  snake.draw()
})