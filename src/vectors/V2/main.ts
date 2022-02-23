import p5 from 'p5'

const app = document.querySelector<HTMLDivElement>('#app')!

let location: p5.Vector
let velocity: p5.Vector
new p5((p5: p5) => {
  p5.setup = function setup() {
    p5.createCanvas(640, 360)

    location = p5.createVector(100, 100)
    velocity = p5.createVector(2.5, 5)
  }

  p5.draw = function draw() {
    p5.background(255)

    location.add(velocity)

    if (location.x > p5.width || location.x < 0) {
      velocity.x = velocity.x * -1
    }
    if (location.y > p5.height || location.y < 0) {
      velocity.y = velocity.y * -1
    }

    p5.stroke(0)
    p5.fill(175)
    p5.ellipse(location.x, location.y, 16, 16)
  }
}, app)
