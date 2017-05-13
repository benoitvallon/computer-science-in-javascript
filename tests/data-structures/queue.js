import chai from 'chai'
import QueueDS from '../../data-structures/queue'

chai.should()

describe('Queue Data Structure', () => {
  it('Get the length() of the queue', (done) => {
    const queue = new QueueDS()
    queue.enqueue(1).enqueue(2).enqueue(3)

    // Assertions.
    queue.length().should.equal(3)

    done()
  })

  it('enqueue() 3 items', (done) => {
    const queue = new QueueDS()
    queue.enqueue(1).enqueue(2).enqueue(3)

    // Assertions.
    queue.getQueue().should.deep.equal([1, 2, 3])

    done()
  })

  it('enqueue() 3 items and dequeue() 2 times', (done) => {
    const queue = new QueueDS()
    queue.enqueue(1).enqueue(2).enqueue(3)

    // Assertions.
    queue.getQueue().should.deep.equal([1, 2, 3])
    queue.dequeue()
    queue.getQueue().should.deep.equal([2, 3])
    queue.dequeue()
    queue.getQueue().should.deep.equal([3])

    done()
  })

  it('enqueue() 3 items peek() then remove one and peek() again.', (done) => {
    const queue = new QueueDS()
    queue.enqueue(1).enqueue(2).enqueue(3)

    // Assertions.
    queue.getQueue().should.deep.equal([1, 2, 3])
    queue.peek().should.deep.equal(1)
    queue.dequeue()
    queue.peek().should.deep.equal(2)
    queue.dequeue()
    queue.peek().should.deep.equal(3)

    done()
  })
})
