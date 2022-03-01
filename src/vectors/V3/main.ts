import p5 from 'p5'

const app = document.querySelector<HTMLDivElement>('#app')!

new p5((p5: p5) => {
  p5.setup = function setup() {
    p5.createCanvas(640, 360)
  }

  p5.draw = function draw() {
    p5.background(255)

    const mouse = p5.createVector(p5.mouseX, p5.mouseY)
    const center = p5.createVector(p5.width / 2, p5.height / 2)

    mouse.sub(center)

    p5.translate(p5.width / 2, p5.height / 2)
    p5.line(0, 0, mouse.x, mouse.y)
  }
}, app)
