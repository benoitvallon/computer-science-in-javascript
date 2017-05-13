/* eslint-disable no-unused-expressions, no-console */
import chai from 'chai'
import DoublyLinkedListDS from '../data-structures/linked-list-doubly'

chai.should()

describe('Doubly Linked List Data Structure', () => {
  it('add(1...5) and get the length() of the linked list.', (done) => {
    const dll = new DoublyLinkedListDS()
    dll.add(1).add(2).add(3).add(4).add(5)

    // Assertions.
    dll.length().should.equal(5)
    dll.toArray().should.deep.equal([1, 2, 3, 4, 5])

    done()
  })

  it('add(1...5) then repeatedly remove() front until empty', (done) => {
    const dll = new DoublyLinkedListDS()

    dll.add(1).add(2).add(3).add(4).add(5)

    // Assertions
    dll.length().should.equal(5)
    dll.toArray().should.deep.equal([1, 2, 3, 4, 5])

    dll.remove(1).toArray().should.deep.equal([2, 3, 4, 5])
    dll.remove(2).toArray().should.deep.equal([3, 4, 5])
    dll.remove(3).toArray().should.deep.equal([4, 5])
    dll.remove(4).toArray().should.deep.equal([5])
    dll.remove(5).toArray().should.deep.equal([])

    done()
  })

  it('add(1...5) then repeatedly remove() rear until empty', (done) => {
    const dll = new DoublyLinkedListDS()

    dll.add(1).add(2).add(3).add(4).add(5)

    // Assertions
    dll.length().should.equal(5)
    dll.toArray().should.deep.equal([1, 2, 3, 4, 5])

    dll.remove(5).toArray().should.deep.equal([1, 2, 3, 4])
    dll.remove(4).toArray().should.deep.equal([1, 2, 3])
    dll.remove(3).toArray().should.deep.equal([1, 2])
    dll.remove(2).toArray().should.deep.equal([1])
    dll.remove(1).toArray().should.deep.equal([])

    done()
  })

  it('add(1...5) then repeatedly remove() middle until empty', (done) => {
    const dll = new DoublyLinkedListDS()

    dll.add(1).add(2).add(3).add(4).add(5)

    // Assertions
    dll.length().should.equal(5)
    dll.toArray().should.deep.equal([1, 2, 3, 4, 5])

    dll.remove(4).toArray().should.deep.equal([1, 2, 3, 5])
    dll.remove(3).toArray().should.deep.equal([1, 2, 5])
    dll.remove(2).toArray().should.deep.equal([1, 5])
    dll.remove(1).toArray().should.deep.equal([5])
    dll.remove(5).toArray().should.deep.equal([])

    done()
  })
})
