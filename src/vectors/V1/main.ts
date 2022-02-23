import p5 from 'p5'

const app = document.querySelector<HTMLDivElement>('#app')!

let x = 100
let y = 100
let xSpeed = 1
let ySpeed = 3.3
new p5((p5: p5) => {
  p5.setup = function setup() {
    p5.createCanvas(640, 360)
    p5.background(255)
  }

  p5.draw = function draw() {
    p5.background(255)

    x = x + xSpeed
    y = y + ySpeed

    if (x > p5.width || x < 0) {
      xSpeed = xSpeed * -1
    }
    if (y > p5.height || y < 0) {
      ySpeed = ySpeed * -1
    }

    p5.stroke(0)
    p5.fill(175)
    p5.ellipse(x, y, 16, 16)
  }
}, app)
