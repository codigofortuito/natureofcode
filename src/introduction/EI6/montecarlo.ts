import p5 from 'p5'

function montecarlo(p5: p5, value: number) {
  // We do this “forever” until we find a qualifying random value.
  while (true) {
    const r1 = p5.random(value)
    const probability = r1

    const r2 = p5.random(value)
    // Does it qualify? If so, we’re done!
    if (r2 < probability) {
      return r1
    }
  }
}

export default montecarlo
