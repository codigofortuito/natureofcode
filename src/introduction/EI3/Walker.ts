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
    let stepX, stepY
    const probFollowMouse = 0.5
    const r = this.p5.random(1)
    if (r < probFollowMouse) {
      const mouseX = this.p5.mouseX
      const mouseY = this.p5.mouseY

      stepX = this.x < mouseX ? 1 : -1
      stepY = this.y < mouseY ? 1 : -1
    } else {
      stepX = this.p5.int(this.p5.random(3)) - 1
      stepY = this.p5.int(this.p5.random(3)) - 1
    }

    this.x += stepX
    this.y += stepY
  }
}

export default Walker
