function Snake(x, y) {
  this.cells = [{x: x, y: y}]
  this.direction = null  // 'up', 'down', 'left', 'right'
  this.isEating = false
}

Snake.prototype.draw = function() {
  this.cells.forEach(function(cell) {
    var snakeCell = document.querySelector(`.row${cell.y}>.col${cell.x}`)
    snakeCell.classList.add('snake')
  })
}

Snake.prototype.updateCoords = function() {
  var copyFirstCell = {x: this.cells[0].x, y: this.cells[0].y}
  this.cells.unshift(copyFirstCell)

  switch (this.direction) {
    case 'up':
      if(copyFirstCell.y === 1) {
        copyFirstCell.y = 20
      } else {
        copyFirstCell.y--
      }
      break
    case 'left':
      if(copyFirstCell.x === 1) {
        copyFirstCell.x = 20
      } else {
        copyFirstCell.x--
      }
      break
    case 'down':
      if(copyFirstCell.y === 20) {
        copyFirstCell.y = 1
      } else {
        copyFirstCell.y++
      }
      break
    case 'right':
      if(copyFirstCell.x === 20) {
        copyFirstCell.x = 1
      } else {
        copyFirstCell.x++
      }
      break
  }
  if(this.isEating === false) {
    this.cells.pop()
  } else {
    this.isEating = false
  }
}

Snake.prototype.erase = function() {
  var snakeCells = document.querySelectorAll('.snake')
  snakeCells.forEach(function(cell) {
    cell.classList.remove('snake')
  }) 
}

Snake.prototype.checkOverlap = function() {
  var head = this.cells[0]
  for(let i = 1; i < this.cells.length; i++){
    if(head.x === this.cells[i].x && head.y === this.cells[i].y) {
      this.isDead = true
      return true
    }
  }
}

export  {Snake}
