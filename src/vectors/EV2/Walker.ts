import p5 from 'p5'

class Walker {
  location: p5.Vector
  time: p5.Vector
  p5: p5

  constructor(p5: p5) {
    this.p5 = p5
    this.location = p5.createVector(p5.width / 2, p5.height / 2)
    this.time = p5.createVector(0, 1000)
  }

  display() {
    this.p5.stroke(0)
    this.p5.point(this.location.x, this.location.y)
  }

  step() {
    const hRandom = this.p5.int(this.p5.random(3)) - 1
    const vRandom = this.p5.int(this.p5.random(3)) - 1

    const stepX = this.p5.map(this.p5.noise(this.time.x), 0, 1, 0, 25, true)
    const stepY = this.p5.map(this.p5.noise(this.time.y), 0, 1, 0, 25, true)

    this.location.add(stepX * hRandom, stepY * vRandom)
    this.time.add(0.01, 0.01)
  }
}

export default Walker
