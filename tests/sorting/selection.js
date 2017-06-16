import chai from 'chai'
import { selectionSort } from '../../src/sorting/selection'
import { fixture1, fixture2, fixture3 } from '../fixtures/sorting'

chai.should()

describe('[Sorting] Selection', () => {
  it('Selection Sort([...])', (done) => {
    // Assertions.
    selectionSort(fixture1().unsorted).should.deep.equal(fixture1().sorted)
    selectionSort(fixture2().unsorted).should.deep.equal(fixture2().sorted)
    selectionSort(fixture3().unsorted).should.deep.equal(fixture3().sorted)

    done()
  })
})
