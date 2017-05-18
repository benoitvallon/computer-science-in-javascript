import chai from 'chai'
import { factorial, addition } from '../../src/recursion/math'

chai.should()

describe('[Recursion] Math', () => {
  it('factorial(1) and factorial(10)', (done) => {
    const factorial1 = factorial(1)
    const factorial10 = factorial(10)

    // Assertions.
    factorial1.should.equal(1)
    factorial10.should.equal(3628800)

    done()
  })

  it('addition(1) and addition(10)', (done) => {
    const addition0 = addition(0)
    const addition1 = addition(1)
    const addition10 = addition(10)

    // Assertions.
    addition0.should.equal(0)
    addition1.should.equal(1)
    addition10.should.equal(55)

    done()
  })
})
