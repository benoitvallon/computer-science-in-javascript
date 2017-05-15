import chai from 'chai'
import { bubbleSort, bubbleSortRecursive } from '../../sorting/bubble'

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

  it('bubbleSortRecursive([...])', (done) => {
    // Assertions.
    console.log(bubbleSortRecursive([7, 5, 2, 4, 3, 9], 6))
    bubbleSort([1], 1).should.deep.equal([1])
    bubbleSort([1, -10], 2).should.deep.equal([-10, 1])
    bubbleSortRecursive([7, 5, 2, 4, 3, 9], 5).should.deep.equal([2, 3, 4, 5, 7, 9])
    bubbleSortRecursive([9, 7, 5, 4, 3, 1], 6).should.deep.equal([1, 3, 4, 5, 7, 9])
    bubbleSortRecursive([1, 2, 3, 4, 5, 6], 6).should.deep.equal([1, 2, 3, 4, 5, 6])

    done()
  })
})
