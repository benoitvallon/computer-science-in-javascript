import chai from 'chai'
import SetDS from '../data-structures/set'

chai.should()
const expect = chai.expect

describe('Set Data Structure', () => {
  it('add() 3 find length()', (done) => {
    const set = new SetDS()

    set.add(1).add(2).add(3).add(4) // .print() => 1 2 3 4
    set.remove(3) // .print() => 1 2 4

    // console.log('contains 4 is true:', set.contains(4)) // => true
    // console.log('contains 3 is false:', set.contains(3)) // => false
    // console.log('---')

    const set1 = new SetDS()
    set1.add(1)
    set1.add(2)
    const set2 = new SetDS()
    set2.add(2)
    set2.add(3)
    const set3 = set2.union(set1)
    // set3.print() // => 1 2 3
    const set4 = set2.intersect(set1)
    // set4.print() // => 2
    // const set5 = set.difference(set3) // 1 2 4 diff 1 2 3
    // set5.print() // => 4
    // const set6 = set3.difference(set) // 1 2 3 diff 1 2 4
    // set6.print() // => 3
    // console.log('set1 subset of set is true:', set.isSubset(set1)) // => true
    // console.log('set2 subset of set is false:', set.isSubset(set2)) // => false
    // console.log('set1 length gives 2:', set1.length()) // => 2
    // console.log('set3 length gives 3:', set3.length()) // => 3

    done()
  })
})
