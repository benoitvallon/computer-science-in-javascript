/* eslint-disable no-unused-expressions */
import chai from 'chai'
import SetDS from '../../src/data-structures/set'

chai.should()
const expect = chai.expect

describe('[Data Structure] Set', () => {
  it('add(1...3) find length()', (done) => {
    const set = new SetDS()

    set.add(1).add(2).add(3)

    // Assertions.
    set.length().should.equal(3)
    set.values.should.deep.equal([1, 2, 3])
    set.add(3).values.should.deep.equal([1, 2, 3])

    done()
  })

  it('add(1...3) and remove() 2 items from set', (done) => {
    const set = new SetDS()

    set.add(1).add(2).add(3)

    // Assertions.
    set.length().should.equal(3)
    set.values.should.deep.equal([1, 2, 3])
    set.remove(3).values.should.deep.equal([1, 2])
    set.remove(1).values.should.deep.equal([2])

    done()
  })

  it('add(1...3) and run contains()', (done) => {
    const set = new SetDS()

    set.add(1).add(2).add(3)

    // Assertions.
    expect(set.contains(3)).to.be.true
    expect(set.contains(4)).to.be.false

    done()
  })

  it('add(1...3) and run contains()', (done) => {
    const set = new SetDS()

    set.add(1).add(2).add(3)

    // Assertions.
    expect(set.contains(3)).to.be.true
    expect(set.contains(4)).to.be.false

    done()
  })

  it('Create two sets and find the intersect() between the two', (done) => {
    const set1 = new SetDS()
    const set2 = new SetDS()

    set1.add(1).add(2).add(3).add(4).add(5).add(6).add(7).add(8).add(9).add(15)
    set2.add(1).add(2).add(3).add(10).add(11).add(12).add(13).add(14).add(15)

    // Assertions.
    set1.intersect(set2).values.should.deep.equal([1, 2, 3, 15])

    done()
  })

  it('Create two sets and find the difference() between the two', (done) => {
    const set1 = new SetDS()
    const set2 = new SetDS()

    set1.add(1).add(2).add(3).add(4).add(5).add(6).add(7).add(8).add(9).add(15)
    set2.add(1).add(2).add(3).add(10).add(11).add(12).add(13).add(14).add(15)

    // Assertions.
    set1.difference(set2).values.should.deep.equal([4, 5, 6, 7, 8, 9])

    done()
  })

  it('Create 3 new SetDS() and determine which are isSubset()', (done) => {
    const set1 = new SetDS()
    const set2 = new SetDS()
    const set3 = new SetDS()

    set1.add(1).add(2).add(3).add(4).add(5).add(9).add(15)
    set2.add(1).add(2).add(3).add(15)
    set3.add(1).add(2).add(3).add(20)

    // Assertions
    expect(set1.isSubset(set2)).to.be.true
    expect(set1.isSubset(set3)).to.be.false

    done()
  })
})
