export default function mergeSort(arr){
  const len=arr.length
  if(len <=1) return arr

  const mid=Math.ceil(len /2)
  const left=mergeSort(arr.slice(0, mid))
  const right=mergeSort(arr.slice(mid))
  return merge(left, right)
}

function compare(v1, v2){
  // todo
  return v1 < v2
}

function merge(a1, a2){
  const res=[]
  while (a1.length && a2.length){
    if(compare(a1[0], a2[0])){
      res.push(a1.shift())
    } else {
      res.push(a2.shift())
    }
  }
  if(a1.length){
    res.push(...a1)
  }
  if(a2.length){
    res.push(...a2)
  }

  return res
}