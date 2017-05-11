import chai from 'chai'
import ArrayDS from '../data-structures/array'

chai.should()

describe('Array Data Structure', () => {
  describe('Testing the add method', () => {
    it('Adding 4 integers to the list "should" work', (done) => {
      const array = new ArrayDS()
      array.add(1).add(2).add(3).add(4)

      // Assertions.
      array.getArray().should.have.lengthOf(4)
      array.print().should.equal('1 2 3 4')
      array.getArray().should.deep.equal([1, 2, 3, 4])
      array.length().should.equal(4)

      // Add two more

      done()
    })

    it('Add 4 remove one.', (done) => {
      const array = new ArrayDS()
      array.add(1).add(2).add(3).add(4).remove(2)

      // Assertions.
      array.getArray().should.have.lengthOf(3)
      array.print().should.equal('1 3 4')
      array.getArray().should.deep.equal([1, 3, 4])
      array.length().should.equal(3)

      done()
    })

    it('Add 4 remove one add two and remove one.', (done) => {
      const array = new ArrayDS()
      array.add(1).add(2).add(3).add(4).remove(2).add(5).add(6).remove(3)

      // Assertions.
      array.getArray().should.have.lengthOf(4)
      array.length().should.equal(4)
      array.print().should.equal('1 4 5 6')
      array.getArray().should.deep.equal([1, 4, 5, 6])

      done()
    })

    it('Add 4 and search.', (done) => {
      const array = new ArrayDS()
      array.add(1).add(2).add(3).add(4).add(1)

      const index = array.search(10)
      console.log('index:', index)
      console.log('value:', array.getArray()[index])

      console.log(array.findAll(10))

      // // Assertions.
      // array.getArray().should.have.lengthOf(4)
      // array.length().should.equal(4)
      // array.print().should.equal('1 4 5 6')
      // array.getArray().should.deep.equal([1, 4, 5, 6])

      done()
    })
  })
})
