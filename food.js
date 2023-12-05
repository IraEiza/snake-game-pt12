function Food(x, y) {
  this.x = x
  this.y = y
}

Food.prototype.draw = function() {
  var foodCell = document.querySelector(`.row${this.y}>.col${this.x}`)
  foodCell.classList.add('food')
}

export { Food }