import p5 from 'p5'
import './style.css'

import Walker from './Walker'

const app = document.querySelector<HTMLDivElement>('#app')!

new p5((p5: p5) => {
  let walker: Walker

  p5.setup = function setup() {
    p5.createCanvas(480, 480)
    walker = new Walker(480, 480, p5)
    p5.background(255)
  }

  p5.draw = function draw() {
    walker.step()
    walker.display()
  }
}, app)
