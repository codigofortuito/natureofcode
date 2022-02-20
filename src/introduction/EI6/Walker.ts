import p5 from 'p5'
import montecarlo from './montecarlo'

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
    const stepsize = this.p5.int(montecarlo(this.p5, 10))

    const stepX = this.p5.random(-stepsize, stepsize)
    const stepY = this.p5.random(-stepsize, stepsize)

    this.x += stepX
    this.y += stepY
  }
}

export default Walker
