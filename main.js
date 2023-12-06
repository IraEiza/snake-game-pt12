import  { Snake } from "./snake.js"
import { Food } from "./food.js"

// Audios

var eatingSound = new Audio("./sources/eating.wav")
var music = new Audio("./sources/background-music.mp3")
var gameOver = new Audio("./sources/GameOverSound.mp3")
music.volume = 0.3
music.play()

// Elementos del juego
var snake = new Snake(4, 5)
snake.draw()

var food = new Food(6, 6)
food.draw()

// Detección del teclado
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

// Game loop
var movement = setInterval( gameLoop, 100)

function gameLoop() {
  snake.updateCoords()
  snake.erase()
  snake.draw()
  if(snake.cells[0].x === food.x && snake.cells[0].y === food.y) {
    eatingSound.play()
    food.respawn()
    snake.isEating = true
  }
  if(snake.checkOverlap()) {
    music.pause()
    gameOver.play()
    alert('Game Over')
    clearInterval(movement)
  }
}