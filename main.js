function Snake(x, y) {
  this.x = x
  this.y = y
  this.direction = null  // 'up', 'down', 'left', 'right'
}

Snake.prototype.draw = function() {
  var snakeCell = document.querySelector(`.row${this.y}>.col${this.x}`)
  snakeCell.classList.add('snake')
}

Snake.prototype.updateCoords = function() {
  switch (this.direction) {
    case 'up':
      this.y--
      break
    case 'left':
      this.x--
      break
    case 'down':
      this.y++
      break
    case 'right':
      this.x++
      break
  }
}

Snake.prototype.erase = function() {
  var snakeCell = document.querySelector('.snake')
  snakeCell.classList.remove('snake')
}

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