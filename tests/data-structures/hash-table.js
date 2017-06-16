/* eslint-disable no-unused-expressions, no-console */
import chai from 'chai'
import HashTableDS from '../../src/data-structures/hash-table'

chai.should()
const expect = chai.expect

describe('[Data Structure] Hash Table', () => {
  it('HashTableDS(0...13) then calculateHash(w9n65bqdlkeoc) for each.', (done) => {
    const hash1 = new HashTableDS(1)
    const hash2 = new HashTableDS(2)
    const hash3 = new HashTableDS(10)
    const hash4 = new HashTableDS(20)

    hash1.calculateHash('w9n65bqdlkeoc').should.equal(0)
    hash2.calculateHash('w9n65bqdlkeoc').should.equal(1)
    hash3.calculateHash('w9n65bqdlkeoc').should.equal(3)
    hash4.calculateHash('w9n65bqdlkeoc').should.equal(13)

    done()
  })

  it('add(1...5) get length() and test hash keys.', (done) => {
    const hash = new HashTableDS(200)
    hash.add('w9n65bq', 10)
      .add('w9n65bqdlkeo', 10)
      .add('o0sbwg8fzu3z9p2juhgds4', 10)
      .add('w9n65bqdlkeocdc6v3wel8fr', 10)
      .add('70xdebzx9jqs7roe083u8zolxr', 10)

    // Assertions.
    hash.length().should.equal(5)

    // Note that this would change depending on the length passed to the constructor.
    Object.keys(hash.values).should.deep.equal(['7', '12', '22', '24', '26'])

    done()
  })

  it('add(1) and search()', (done) => {
    const valueToSave = 'This is it yo!'
    const hash = new HashTableDS(200)
    hash.add('w9n65bq', valueToSave)

    // Assertions.
    hash.search('w9n65bq').should.equal(valueToSave)
    expect(hash.search('this-key-does-not-exist')).to.be.null

    done()
  })

  it('add(1...5) and remove() each.', (done) => {
    const hash = new HashTableDS(200)
    hash.add('w9n65bq', 10)
      .add('w9n65bqdlkeo', 10)
      .add('o0sbwg8fzu3z9p2juhgds4', 10)
      .add('w9n65bqdlkeocdc6v3wel8fr', 10)
      .add('70xdebzx9jqs7roe083u8zolxr', 10)

    // Assertions.
    hash.length().should.equal(5)
    hash.remove('w9n65bq').length().should.equal(4)
    hash.remove('w9n65bqdlkeo').length().should.equal(3)
    hash.remove('o0sbwg8fzu3z9p2juhgds4').length().should.equal(2)
    hash.remove('w9n65bqdlkeocdc6v3wel8fr').length().should.equal(1)
    hash.remove('70xdebzx9jqs7roe083u8zolxr').length().should.equal(0)
    Object.keys(hash.values).should.deep.equal(['7', '12', '22', '24', '26'])

    done()
  })
})
