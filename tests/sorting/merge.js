import chai from 'chai'
import { mergeSort, merge } from '../../src/sorting/merge'
import { fixture1, fixture2, fixture3, merge1, merge2, merge3 } from '../fixtures/sorting'

chai.should()

describe('[Sorting] Merge Sort!', () => {
  it('mergeSort([...])', (done) => {
    // Assertions.
    mergeSort(fixture1().unsorted).should.deep.equal(fixture1().sorted)
    mergeSort(fixture2().unsorted).should.deep.equal(fixture2().sorted)
    mergeSort(fixture3().unsorted).should.deep.equal(fixture3().sorted)

    done()
  })

  it('merge([...], [...])', (done) => {
    // Assertions.
    merge(merge1().unsorted.left, merge1().unsorted.right)
      .should.deep.equal(merge1().sorted)

    merge(merge2().unsorted.left, merge2().unsorted.right)
      .should.deep.equal(merge2().sorted)

    merge(merge3().unsorted.left, merge3().unsorted.right)
      .should.deep.equal(merge3().sorted)

    done()
  })
})
