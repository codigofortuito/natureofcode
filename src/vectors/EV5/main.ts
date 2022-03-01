import p5 from 'p5'

import Mover from './Mover'

const app = document.querySelector<HTMLDivElement>('#app')!

let mover: Mover
new p5((p5: p5) => {
  p5.setup = function setup() {
    p5.createCanvas(640, 360)
    mover = new Mover(p5)
  }

  p5.draw = function draw() {
    p5.background(255)

    mover.update()
    mover.checkEdges()
    mover.display()
  }

  p5.keyPressed = function keyPressed() {
    if (p5.keyCode === p5.UP_ARROW) {
      mover.accelerate()
    }

    if (p5.keyCode === p5.DOWN_ARROW) {
      mover.decelerate()
    }
  }
}, app)
