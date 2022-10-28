import ListNode, {arrayToList, listToArray} from "./linked-list";
import sol1 from './sol-1'

describe(`add two num linked list`, () => {
  const arr = [1, 2, 3]
  const list = new ListNode(
    1,
    new ListNode(2,
      new ListNode(3))
  )

  it(`array to linked list`, () => {
    expect(arrayToList(arr)).toEqual(list)
  })

  it(`linked list to array`, () => {
    expect(listToArray(list)).toEqual(arr)
  })

  it(`sol-1`, () => {
    const l1=[2,4,3]
    const l2=[5,6,4]
    const output=[7,0,8]
    expect(sol1(l1, l2)).toEqual(output)
  })
})