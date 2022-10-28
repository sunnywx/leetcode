class ListNode{
  val
  next

  constructor(val=0, next=null){
    this.val=val
    this.next=next
  }
}

export function arrayToList(arr){
  let l=new ListNode(), p=l
  for (let i=0, len=arr.length; i<len; i++){
    p.val=arr[i]
    if(i<len-1){
      p.next=new ListNode()
    } else {
      p.next=null
    }
    p=p.next
  }
  return l
}

export function listToArray(list){
  const arr=[]
  while (list.next !== null){
    arr.push(list.val)
    list=list.next
  }
  // add trailing node
  arr.push(list.val)

  return arr
}

export default ListNode