/* eslint-disable no-unused-expressions */
import chai from 'chai'
import TreeDS from '../../src/data-structures/tree'
import { fullFixture, removedCtoFixture, removedCfoFixture } from '../fixtures/tree'

chai.should()
const expect = chai.expect

describe('[Data Structure] Tree', () => {
  it('TreeDS() root should be null', (done) => {
    const tree = new TreeDS()

    // Assertions.
    expect(tree.root).to.be.null

    done()
  })

  it('Should not be able to remove from an empty tree.', (done) => {
    const tree = new TreeDS()

    // Assertions.
    tree.remove('nothing here').should.deep.equal(tree)

    done()
  })

  it('add(1...2) and should not be able to reset root node', (done) => {
    const tree = new TreeDS()
    tree.add('thing')

    // Assertions.
    expect(tree.add.bind(tree, 'another')).to.throw('Root node is already assigned')

    done()
  })

  it('add(1...8) compare tree', (done) => {
    const tree = new TreeDS()
    tree.add('ceo')
    tree.add('cto', 'ceo')
    tree.add('cfo', 'ceo')
    tree.add('cmo', 'ceo')
    tree.add('dev1', 'cto')
    tree.add('dev2', 'cto')
    tree.add('dev3', 'cto')
    tree.add('accountant', 'cfo')

    // Assertions.
    tree.getTree().should.deep.equal(fullFixture)

    done()
  })

  it('add(1...8) remove(cto), remove(cfo), remove(ceo), ', (done) => {
    const tree = new TreeDS()
    tree.add('ceo')
    tree.add('cto', 'ceo')
    tree.add('cfo', 'ceo')
    tree.add('cmo', 'ceo')
    tree.add('dev1', 'cto')
    tree.add('dev2', 'cto')
    tree.add('dev3', 'cto')
    tree.add('accountant', 'cfo')

    // Assertions.
    tree.remove('cto').getTree().should.deep.equal(removedCtoFixture)
    tree.remove('cfo').getTree().should.deep.equal(removedCfoFixture)
    expect(tree.remove('ceo').getTree()).to.be.null

    done()
  })

  it('add(1...8) remove(ceo), ', (done) => {
    const tree = new TreeDS()
    tree.add('ceo')
    tree.add('cto', 'ceo')
    tree.add('cfo', 'ceo')
    tree.add('cmo', 'ceo')
    tree.add('dev1', 'cto')
    tree.add('dev2', 'cto')
    tree.add('dev3', 'cto')
    tree.add('accountant', 'cfo')

    // Assertions.
    // @todo I would need to get confirmation but I think that since this destroys the
    // reference to the root it should be garbage colleted later.
    expect(tree.remove('ceo').getTree()).to.be.null

    done()
  })
})

// const tree = new Tree()
// tree.add('ceo')
// tree.add('cto', 'ceo')
// tree.add('dev1', 'cto')
// tree.add('dev2', 'cto')
// tree.add('dev3', 'cto')
// tree.add('cfo', 'ceo')
// tree.add('accountant', 'cfo')
// tree.add('cmo', 'ceo')
// tree.print()
//    => ceo | cto cfo cmo | dev1 dev2 dev3 accountant
// tree.printByLevel()
//    => ceo \n cto cfo cmo \n dev1 dev2 dev3 accountant
// console.log('tree contains dev1 is true:', tree.contains('dev1'))
//    => true
// console.log('tree contains dev4 is false:', tree.contains('dev4'))
//    => false
// console.log('--- BFS')
// tree.traverseBFS((node) => { console.log(node.data) })
//    => ceo cto cfo cmo dev1 dev2 dev3 accountant
// console.log('--- DFS preOrder')
// tree.traverseDFS((node) => { console.log(node.data) }, 'preOrder')
//    => ceo cto dev1 dev2 dev3 cfo accountant cmo
// console.log('--- DFS postOrder')
// tree.traverseDFS((node) => { console.log(node.data) }, 'postOrder')
//    => dev1 dev2 dev3 cto accountant cfo cmo ceo
// tree.remove('cmo')
// tree.print() // => ceo | cto cfo | dev1 dev2 dev3 accountant
// tree.remove('cfo')
// tree.print() // => ceo | cto | dev1 dev2 dev3
