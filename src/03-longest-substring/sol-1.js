function checkDup(s) {
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

/**
 * time: O(n^2)
 *
 * @param s
 * @returns {number|*}
 */
export default function findLongestSubstring(s) {
  const len = s.length
  if (len <= 1) return len

  let max = 1
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const gap = j - i + 1
      if (max < gap) {
        const sub = s.substring(i, j + 1) // substring will exclude end index
        // check duplicate
        if (!checkDup(sub)) {
          max = gap
        }
      }
    }
  }
  return max
}