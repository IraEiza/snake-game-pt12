function Food(x, y) {
  this.x = x
  this.y = y
}

Food.prototype.draw = function() {
  var foodCell = document.querySelector(`.row${this.y}>.col${this.x}`)
  foodCell.classList.add('food')
}

Food.prototype.respawn = function() {
  this.x = Math.ceil(Math.random() * 20)
  this.y = Math.ceil(Math.random() * 20)
  this.erase()
  this.draw()
}

Food.prototype.erase = function() {
  var foodCell = document.querySelector('.food')
  foodCell.classList.remove('food')
}

export { Food }