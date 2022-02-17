import p5 from 'p5'

const app = document.querySelector<HTMLDivElement>('#app')!

new p5((p5: p5) => {
  let randomCounts = Array.from({ length: 10 }, () => 0)
  p5.setup = function setup() {
    p5.createCanvas(640, 240)
  }

  p5.draw = function draw() {
    p5.background(255)

    const index = p5.int(p5.random(randomCounts.length))
    randomCounts[index]++

    p5.stroke(0)
    p5.fill(175)

    const w = p5.width / randomCounts.length
    for (let x = 0; x < randomCounts.length; x++) {
      p5.rect(x * w, p5.height - randomCounts[x], w - 1, randomCounts[x])
    }
  }
}, app)
