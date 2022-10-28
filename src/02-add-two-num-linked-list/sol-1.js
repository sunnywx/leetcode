import ListNode, {arrayToList, listToArray} from "./linked-list";

/**
 *
 * @param l1 ListNode | array
 * @param l2 ListNode | array
 */
export default function addTwoNum(l1, l2){
  if(Array.isArray(l1)){
    l1=arrayToList(l1)
  }
  if(Array.isArray(l2)){
    l2=arrayToList(l2)
  }

  let p1=l1, p2=l2  // pointer to l1, l2
  do{
    if(p1.next === null && p2.next){
      p1.next=new ListNode()
    }
    if(p1.next && p2.next === null){
      p2.next=new ListNode()
    }

    p1.val=p1.val + p2.val

    // check val if bigger than 10
    if(p1.val >= 10){
      p1.val=p1.val % 10

      if(!p1.next && !p2.next){
        // tail node
        p1.next=new ListNode(1)
      } else if(p1.next){
        // mid node
        p1.next.val++
      }
    }

    // move pointer
    p1=p1.next
    p2=p2.next
  } while(p1 && p2)

  // return l1
  return listToArray(l1)
}