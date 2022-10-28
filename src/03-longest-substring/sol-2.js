import {checkDup, find} from "./util";

/**
 * recursive
 * find left, find middle, find right, then merge
 *
 * @param s
 */
export default function findLongest(s) {
  let lo = 0, hi = s.length - 1, mid = Math.ceil((lo + hi) / 2)

  function findMiddle(s) {
    let max = 1
    for (let i = 0; i <= mid; i++) {
      for (let j = hi; j >= mid && j - i + 1 > max; j--) {
        const sub = s.substring(i, j + 1)
        if (!checkDup(sub)) {
          max = j - i + 1
        }
      }
    }
    return max
  }

  const maxLeft = find(s, lo, mid-1)
  const maxRight = find(s, mid + 1, hi)
  // find(s[mid-j..mid+j]), j>=0
  const maxMiddle = findMiddle(s)

  return Math.max(maxLeft, maxMiddle, maxRight)
}