/* eslint-disable no-unused-expressions, no-console */
import chai from 'chai'
import DoublyLinkedListDS from '../../src/data-structures/linked-list-doubly'

chai.should()

describe('[Data Structure] Doubly Linked List', () => {
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

  it('add(1) and insertAfter() 3 times', (done) => {
    const sll = new DoublyLinkedListDS()

    sll.add(1)

    // Assertions.
    sll.insertAfter(2, 1).toArray().should.deep.equal([1, 2])
    sll.insertAfter(3, 2).toArray().should.deep.equal([1, 2, 3])
    sll.insertAfter(4, 3).toArray().should.deep.equal([1, 2, 3, 4])
    sll.length().should.equal(4)

    done()
  })

  it('add(1...2) and insertAfter() the tail', (done) => {
    const sll = new DoublyLinkedListDS()

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
    const sll = new DoublyLinkedListDS()

    sll.add(1).add(2).add(3).add(4).add(5)

    // Assertions.
    sll.traverse(callback).toArray().should.deep.equal([11, 12, 13, 14, 15])
    sll.traverseReverse(callback).toArray().should.deep.equal([21, 22, 23, 24, 25])

    done()
  })
})
