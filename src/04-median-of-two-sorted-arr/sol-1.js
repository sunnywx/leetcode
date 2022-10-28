import mergeSort from "./merge-sort";

// 寻找两个排好序的数组的中位数，time ~ O(log(m+n))
export default function medianTwoSortedArray(a1, a2) {
  // use merge sort to sort each array
  const sort1 = mergeSort(a1)
  const sort2 = mergeSort(a2)
  const sorted = mergeSort([...sort1, ...sort2])

  // console.log('sorted: ', sorted)

  // find median
  const m = a1.length, n = a2.length
  const mid = Math.ceil((m + n) / 2) - 1  // index
  if ((m + n) % 2 === 1) {
    // odd
    return sorted[mid]
  } else {
    // even
    return (sorted[mid - 1] + sorted[mid + 1]) / 2
  }
}