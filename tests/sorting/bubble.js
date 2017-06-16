import chai from 'chai'
import { fixture1, fixture2, fixture3, fixture4, fixture5 } from '../fixtures/sorting'
import { bubbleSort, bubbleSortRecursive } from '../../src/sorting/bubble'

chai.should()

describe('[Sorting] Bubble', () => {
  it('bubbleSort([...])', (done) => {
    // Assertions.
    bubbleSort([1]).should.deep.equal([1])
    bubbleSort([1, -10]).should.deep.equal([-10, 1])
    bubbleSort(fixture1().unsorted).should.deep.equal(fixture1().sorted)
    bubbleSort(fixture2().unsorted).should.deep.equal(fixture2().sorted)
    bubbleSort(fixture3().unsorted).should.deep.equal(fixture3().sorted)

    done()
  })

  it('bubbleSortRecursive([...])', (done) => {
    // Assertions.
    bubbleSortRecursive(fixture1().unsorted, 10).should.deep.equal(fixture1().sorted)
    bubbleSortRecursive(fixture2().unsorted, 12).should.deep.equal(fixture2().sorted)
    bubbleSortRecursive(fixture3().unsorted, 2).should.deep.equal(fixture3().sorted)
    bubbleSortRecursive(fixture4().unsorted, 1).should.deep.equal(fixture4().sorted)
    bubbleSortRecursive(fixture5().unsorted, 2).should.deep.equal(fixture5().sorted)

    done()
  })
})
