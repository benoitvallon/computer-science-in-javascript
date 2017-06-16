/* eslint-disable no-unused-expressions, no-console */
import chai from 'chai'
import SinglyLinkedListDS from '../../src/data-structures/linked-list-singly'

chai.should()
const expect = chai.expect

describe('[Data Structure] Singly Linked List', () => {
  it('Get the length() of the linked list.', (done) => {
    const sll = new SinglyLinkedListDS()
    sll.add(1).add(2).add(3).add(4).add(5)

    // Assertions
    sll.length().should.equal(5)

    done()
  })

  it('add(1...5) to the list', (done) => {
    const sll = new SinglyLinkedListDS()
    sll.add(1).add(2).add(3).add(4).add(5)

    // Assertions
    sll.length().should.equal(5)
    sll.toArray().should.deep.equal([1, 2, 3, 4, 5])

    done()
  })

  it('remove() with no arguments should throw an error', (done) => {
    const sll = new SinglyLinkedListDS()
    sll.add(1)

    // Assertions
    expect(sll.remove).to.throw(/Requires data ya doof/)

    done()
  })

  it('add(1...5) then repeatedly remove() front until empty', (done) => {
    const sll = new SinglyLinkedListDS()

    sll.add(1).add(2).add(3).add(4).add(5)

    // Assertions
    sll.length().should.equal(5)
    sll.toArray().should.deep.equal([1, 2, 3, 4, 5])

    sll.remove(1).toArray().should.deep.equal([2, 3, 4, 5])
    sll.remove(2).toArray().should.deep.equal([3, 4, 5])
    sll.remove(3).toArray().should.deep.equal([4, 5])
    sll.remove(4).toArray().should.deep.equal([5])
    sll.remove(5).toArray().should.deep.equal([])

    done()
  })

  it('add(1...5) then repeatedly remove() rear until empty', (done) => {
    const sll = new SinglyLinkedListDS()

    sll.add(1).add(2).add(3).add(4).add(5)

    // Assertions
    sll.length().should.equal(5)
    sll.toArray().should.deep.equal([1, 2, 3, 4, 5])

    sll.remove(5).toArray().should.deep.equal([1, 2, 3, 4])
    sll.remove(4).toArray().should.deep.equal([1, 2, 3])
    sll.remove(3).toArray().should.deep.equal([1, 2])
    sll.remove(2).toArray().should.deep.equal([1])
    sll.remove(1).toArray().should.deep.equal([])

    done()
  })

  it('add(1...5) then repeatedly remove() middle until empty', (done) => {
    const sll = new SinglyLinkedListDS()

    sll.add(1).add(2).add(3).add(4).add(5)

    // Assertions
    sll.length().should.equal(5)
    sll.toArray().should.deep.equal([1, 2, 3, 4, 5])

    sll.remove(4).toArray().should.deep.equal([1, 2, 3, 5])
    sll.remove(3).toArray().should.deep.equal([1, 2, 5])
    sll.remove(2).toArray().should.deep.equal([1, 5])
    sll.remove(1).toArray().should.deep.equal([5])
    sll.remove(5).toArray().should.deep.equal([])

    done()
  })

  it('add(1) and insertAfter() 3 times', (done) => {
    const sll = new SinglyLinkedListDS()

    sll.add(1)

    // Assertions.
    sll.insertAfter(2, 1).toArray().should.deep.equal([1, 2])
    sll.insertAfter(3, 2).toArray().should.deep.equal([1, 2, 3])
    sll.insertAfter(4, 3).toArray().should.deep.equal([1, 2, 3, 4])
    sll.length().should.equal(4)

    done()
  })

  it('add(1...2) and insertAfter() the tail', (done) => {
    const sll = new SinglyLinkedListDS()

    sll.add(1).add(2)

    // Assertions.
    sll.length().should.equal(2)
    sll.insertAfter('one', 1).toArray().should.deep.equal([1, 'one', 2])
    sll.insertAfter('two', 2).toArray().should.deep.equal([1, 'one', 2, 'two'])
    sll.length().should.equal(4)

    done()
  })

  it('add(1...5) and apply a callback via the traverse() method', (done) => {
    // eslint-disable-next-line
    const callback = (node) => { node.data += 10 }
    const sll = new SinglyLinkedListDS()

    sll.add(1).add(2).add(3).add(4).add(5)

    // Assertions.
    sll.traverse(callback).toArray().should.deep.equal([11, 12, 13, 14, 15])

    done()
  })
})
