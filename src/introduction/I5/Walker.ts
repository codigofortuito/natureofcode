import p5 from 'p5'

class Walker {
  x: number
  y: number
  tx: number
  ty: number
  p5: p5

  constructor(p5: p5) {
    this.p5 = p5
    this.x = p5.width / 2
    this.y = p5.height / 2
    this.tx = 0
    this.ty = 1000
  }

  display() {
    this.p5.stroke(0)
    this.p5.point(this.x, this.y)
  }

  step() {
    this.x = this.p5.map(this.p5.noise(this.tx), 0, 1, 0, this.p5.width)
    this.y = this.p5.map(this.p5.noise(this.ty), 0, 1, 0, this.p5.height)

    this.tx += 0.01
    this.ty += 0.01
  }
}

export default Walker
