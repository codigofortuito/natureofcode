import p5 from 'p5'

class Mover {
  p5: p5
  location: p5.Vector
  velocity: p5.Vector
  acceleration: p5.Vector

  constructor(p5: p5) {
    this.p5 = p5
    this.location = p5.createVector(p5.random(p5.width), p5.random(p5.height))
    this.velocity = p5.createVector(0, 0)
    this.acceleration = p5.createVector(0, 0)
  }

  update() {
    this.velocity.add(this.acceleration)
    this.location.add(this.velocity)
  }

  display() {
    this.p5.stroke(0)
    this.p5.fill(175)
    this.p5.ellipse(this.location.x, this.location.y, 16, 16)
  }

  checkEdges() {
    if (this.location.x > this.p5.width) {
      this.location.x = 0
    } else if (this.location.x < 0) {
      this.location.x = this.p5.width
    }

    if (this.location.y > this.p5.height) {
      this.location.y = 0
    } else if (this.location.y < 0) {
      this.location.y = this.p5.height
    }
  }

  accelerate() {
    if (this.acceleration.mag() === 0) {
      this.acceleration = this.p5.createVector(-0.001, 0.001)
    } else {
      this.acceleration = this.acceleration.add(
        this.acceleration.normalize().mult(0.1)
      )
    }
  }

  decelerate() {
    this.acceleration = this.acceleration.sub(
      this.acceleration.normalize().mult(0.1)
    )
  }
}

export default Mover
