import chai from 'chai'
import StackDS from '../../src/data-structures/stack'

chai.should()

describe('[Data Structure] Stack', () => {
  it('add(1...3) find length()', (done) => {
    const stack = new StackDS()
    stack.push(1).push(2).push(3)

    // Assertions
    stack.length().should.equal(3)
    stack.stack.should.deep.equal([1, 2, 3])
    stack.print().should.equal('1 2 3')

    done()
  })

  it('add(1...3) then peek() then add(1) and peek() again', (done) => {
    const stack = new StackDS()
    stack.push(1).push(2).push(3)

    // Assertions
    stack.peek().should.equal(3)
    stack.push(2).peek().should.equal(2)

    done()
  })

  it('add(1...3) and pop()', (done) => {
    const stack = new StackDS()
    stack.push(1).push(2).push(3).pop()

    // Assertions
    stack.stack.should.deep.equal([1, 2])
    stack.push(1).stack.should.deep.equal([1, 2, 1])
    stack.length().should.equal(3)

    done()
  })
})
