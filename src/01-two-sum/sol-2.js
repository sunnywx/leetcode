// use hash table
export default function twoSum(nums, target){
  const len=nums.length
  const map={}
  for(let i=0; i<len; i++){
    // caution duplicate value
    map[nums[i]] = i
  }

  for (let i=0; i<len; i++){
    const complement=target - nums[i]
    if(complement in map && map[complement] !== i){
      return [i, map[complement]]
    }
  }

  return []
}