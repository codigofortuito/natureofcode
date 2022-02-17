import p5 from 'p5'

class Walker {
  x: number
  y: number
  p5: p5

  constructor(width: number, height: number, p5: p5) {
    this.p5 = p5
    this.x = width / 2
    this.y = height / 2
  }

  display() {
    this.p5.stroke(0)
    this.p5.point(this.x, this.y)
  }

  step() {
    const stepX = this.p5.int(this.p5.random(3)) - 1
    const stepY = this.p5.int(this.p5.random(3)) - 1

    this.x += stepX
    this.y += stepY
  }
}

export default Walker
