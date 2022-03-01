import p5 from 'p5'

const app = document.querySelector<HTMLDivElement>('#app')!

const side = 150
let location: p5.Vector
let velocity: p5.Vector
new p5((p5: p5) => {
  p5.setup = function setup() {
    p5.createCanvas(500, 500, p5.WEBGL)

    location = p5.createVector(50, 50, 50)
    velocity = p5.createVector(2.5, 5, 2.5)
  }

  p5.draw = function draw() {
    p5.background(255, 255, 34)

    p5.strokeWeight(4)

    p5.rotateY(p5.frameCount * 0.01)

    // back
    p5.line(0, 0, 0, side, 0, 0)
    p5.line(side, 0, 0, side, side, 0)
    p5.line(side, side, 0, 0, side, 0)
    p5.line(0, side, 0, 0, 0, 0)

    // front
    p5.line(0, 0, side, side, 0, side)
    p5.line(side, 0, side, side, side, side)
    p5.line(side, side, side, 0, side, side)
    p5.line(0, side, side, 0, 0, side)

    // left
    p5.line(side, 0, 0, side, side, 0)
    p5.line(side, side, 0, side, side, side)
    p5.line(side, side, side, side, 0, side)
    p5.line(side, 0, side, side, 0, 0)

    // right
    p5.line(0, 0, 0, 0, side, 0)
    p5.line(0, side, 0, 0, side, side)
    p5.line(0, side, side, 0, 0, side)
    p5.line(0, 0, side, 0, 0, 0)

    location.add(velocity)

    if (location.x > side - 5 || location.x < 5) {
      velocity.x = velocity.x * -1
    }
    if (location.y > side - 5 || location.y < 5) {
      velocity.y = velocity.y * -1
    }
    if (location.z > side - 5 || location.z < 5) {
      velocity.z = velocity.z * -1
    }

    p5.push()
    p5.translate(location.x, location.y, location.z)
    p5.sphere(5, 8)
    p5.pop()
  }
}, app)
