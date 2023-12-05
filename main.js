function Snake(x, y) {
  this.x = x
  this.y = y
}

Snake.prototype.draw = function() {
  var snakeCell = document.querySelector(`.row${this.x}>.col${this.y}`)
  snakeCell.classList.add('snake')
}

var snake = new Snake(4, 18)
snake.draw()

