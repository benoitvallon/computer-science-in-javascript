/* eslint-disable no-console */
import chai from 'chai'
import { quickSort } from '../../src/sorting/quicksort'
import { fixture1 } from '../fixtures/sorting'

chai.should()

describe('[Sorting] Quick Sort!', () => {
  it('quickSort([...])', (done) => {
    // Assertions.
    console.log('quickSort(fixture1())', quickSort(fixture1().unsorted))
    // .should.deep.equal(fixture1().sorted)

    done()
  })

  it('partition([...])', (done) => {
    // Assertions.
    // console.log(fixture1().unsorted)

    done()
  })

  it('swap([...])', (done) => {
    // Assertions.
    // console.log(fixture1().unsorted)

    done()
  })
})
