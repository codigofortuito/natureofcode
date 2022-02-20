import p5 from 'p5'

const app = document.querySelector<HTMLDivElement>('#app')!

new p5((p5: p5) => {
  p5.setup = function setup() {
    p5.createCanvas(640, 240)
  }

  p5.draw = function draw() {
    p5.noLoop()
    let img = p5.createImage(550, 550)
    img.loadPixels()
    let xOff = 0.0

    for (let x = 0; x < img.width; x++) {
      let yOff = 0.0

      for (let y = 0; y < img.height; y++) {
        img.set(x, y, p5.color(p5.map(p5.noise(xOff, yOff), 0, 1, 0, 255)))

        yOff += 0.01
      }
      xOff += 0.01
    }
    img.updatePixels()
    p5.image(img, 0, 0)
  }
}, app)
