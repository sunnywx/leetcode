export function checkDup(s) {
  let a = [], dup = false
  for (let i = 0, len = s.length; i < len; i++) {
    if (a.indexOf(s[i]) < 0) {
      a.push(s[i])
    } else {
      dup = true
      break
    }
  }
  return dup
}

export function find(s, lo, hi) {
  let max = 1
  if(lo > hi) return 0

  for (let i = lo; i <= hi; i++) {
    for (let j = hi; j > lo && j-i+1 > max; j--) {
      const sub = s.substring(i, j + 1) // substring will exclude end index
      if (!checkDup(sub)) {
        max = j-i+1
      }
    }
  }
  return max
}