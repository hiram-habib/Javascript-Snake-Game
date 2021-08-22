export const SNAKE_SPEED = 1
const snakeBody = [{x: 11, y: 11}]

export function update() {
}

export function draw(gameboard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.x
        snakeElement.style.gridColumnStart = segment.y
        snakeElement.classList.add('snake')
        gameboard.appendChild(snakeElement)
    })
}