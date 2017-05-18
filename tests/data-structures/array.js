/* eslint-disable no-unused-expressions */
import chai from 'chai'
import ArrayDS from '../../src/data-structures/array'

chai.should()
const expect = chai.expect

describe('[Data Structure] Array', () => {
  it('add(1...2) find length()', (done) => {
    const array = new ArrayDS()
    array.add(1).add(2)

    // Assertions.
    array.getArray().should.have.lengthOf(2)
    array.length().should.equal(2)

    done()
  })

  it('add(1...4)', (done) => {
    const array = new ArrayDS()
    array.add(1).add(2).add(3).add(4)

    // Assertions.
    array.getArray().should.have.lengthOf(4)
    array.print().should.equal('1 2 3 4')
    array.getArray().should.deep.equal([1, 2, 3, 4])
    array.length().should.equal(4)

    done()
  })

  it('add(1...4) remove() one.', (done) => {
    const array = new ArrayDS()
    array.add(1).add(2).add(3).add(4).remove(2)

    // Assertions.
    array.getArray().should.have.lengthOf(3)
    array.print().should.equal('1 3 4')
    array.getArray().should.deep.equal([1, 3, 4])
    array.length().should.equal(3)

    done()
  })

  it('add(1...4) remove(1) add(1...2) and remove(1).', (done) => {
    const array = new ArrayDS()
    array.add(1).add(2).add(3).add(4).remove(2).add(5).add(6).remove(3)

    // Assertions.
    array.getArray().should.have.lengthOf(4)
    array.length().should.equal(4)
    array.print().should.equal('1 4 5 6')
    array.getArray().should.deep.equal([1, 4, 5, 6])

    done()
  })

  it('add(1...5) and search() invalid', (done) => {
    const array = new ArrayDS()
    array.add(1).add(2).add(3).add(4).add(1)

    // Assertions.
    array.getArray().should.have.lengthOf(5)
    array.search(1).should.equal(0)
    expect(array.search(10)).to.be.null

    done()
  })

  it('add(1...5) and findAll()', (done) => {
    const array = new ArrayDS()
    array.add(1).add(2).add(3).add(4).add(1)

    // Assertions.
    array.getArray(1).should.have.lengthOf(5)
    array.findAll(1).should.deep.equal([0, 4])
    expect(array.findAll(10)).to.be.empty

    done()
  })

  it('add(1...4) and getAtIndex()', (done) => {
    const array = new ArrayDS()
    array.add(1).add(2).add(3).add(4)

    // Assertions.
    array.getArray(1).should.have.lengthOf(4)
    array.getAtIndex(0).should.equal(1)
    array.getAtIndex(1).should.equal(2)
    expect(array.getAtIndex(-1)).to.be.undefined

    done()
  })
})
