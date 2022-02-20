import p5 from 'p5'

class Walker {
  x: number
  y: number
  p5: p5

  constructor(p5: p5) {
    this.p5 = p5
    this.x = p5.width / 2
    this.y = p5.height / 2
  }

  display() {
    this.p5.stroke(0)
    this.p5.point(this.x, this.y)
  }

  step() {
    const hRandom = this.p5.int(this.p5.random(4)) - 1
    const vRandom = this.p5.int(this.p5.random(4)) - 1

    const stepX = hRandom >= 1 ? 1 : hRandom
    const stepY = vRandom >= 1 ? 1 : vRandom

    this.x += stepX
    this.y += stepY
  }
}

export default Walker
