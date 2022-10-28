import {find} from "./util";

/**
 * time: O(n^2)
 *
 * @param s
 * @returns {number|*}
 */
export default function findLongestSubstring(s) {
  return find(s, 0, s.length - 1)
}