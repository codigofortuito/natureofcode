import p5 from 'p5'

const app = document.querySelector<HTMLDivElement>('#app')!

new p5((p5: p5) => {
  p5.setup = function setup() {
    p5.createCanvas(640, 240)
  }

  let time = 0
  p5.draw = function draw() {
    let img = p5.createImage(255, 255)
    img.loadPixels()
    let xOff = 0.0

    for (let x = 0; x < img.width; x++) {
      let yOff = 0.0

      for (let y = 0; y < img.height; y++) {
        const red = p5.map(p5.noise(xOff, yOff, time), 0, 1, 0, 255)
        const green = p5.map(
          p5.noise(xOff + 1000, yOff + 1000, time),
          0,
          1,
          0,
          255
        )
        const blue = p5.map(
          p5.noise(xOff + 3500, yOff + 3500, time),
          0,
          1,
          0,
          255
        )
        img.set(x, y, p5.color(red, green, blue))

        yOff += 0.01
      }
      xOff += 0.01
    }
    img.updatePixels()
    p5.image(img, 0, 0)

    time += 0.01
  }
}, app)
