/**
 * two level loop and compare
 * time ~ O(n^2)
 *
 * @param nums numbers[]
 * @param target numer
 */
export default function twoSun(nums, target) {
  let len=nums.length
  for(let i=0; i<len; i++){
    for(let j=i+1; j<len; j++){
      if(nums[i] + nums[j] === target){
        return [i, j]
      }
    }
  }

  return []
}