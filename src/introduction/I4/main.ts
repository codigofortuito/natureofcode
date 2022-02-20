import p5 from 'p5'

const app = document.querySelector<HTMLDivElement>('#app')!

new p5((p5: p5) => {
  p5.setup = function setup() {
    p5.createCanvas(640, 240)
  }

  p5.draw = function draw() {
    const x = p5.randomGaussian(320, 60)

    p5.noStroke()
    p5.fill('rgba(0,255,0, 0.25)')
    p5.ellipse(x, 180, 16, 16)
  }
}, app)
