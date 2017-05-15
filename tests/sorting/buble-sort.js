import chai from 'chai'
import { bubbleSort } from '../../sorting/bubble'

chai.should()

describe('[Sorting] Bubble', () => {
  it('bubbleSort([...])', (done) => {
    // Assertions.
    bubbleSort([1]).should.deep.equal([1])
    bubbleSort([1, -10]).should.deep.equal([-10, 1])
    bubbleSort([7, 5, 2, 4, 3, 9]).should.deep.equal([2, 3, 4, 5, 7, 9])
    bubbleSort([9, 7, 5, 4, 3, 1]).should.deep.equal([1, 3, 4, 5, 7, 9])
    bubbleSort([1, 2, 3, 4, 5, 6]).should.deep.equal([1, 2, 3, 4, 5, 6])

    done()
  })
})
