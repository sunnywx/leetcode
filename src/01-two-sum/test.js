import sol1 from './sol-1'
import sol2 from './sol-2'

describe(`two sum`, ()=> {
  let seeds=[
    [[0,0,2,3], 0, [0,1]],
    [[1,2,3,4], 5, [0,3]],
    [[1,2,3,4], 3, [0,1]],
  ]

  it(`sol-1`, ()=> {
    seeds.forEach(([nums, target, res])=> {
      expect(sol1(nums, target)).toEqual(res)
    })
  })

  it(`sol-2`, ()=> {
    seeds.forEach(([nums, target, res])=> {
      expect(sol2(nums, target)).toEqual(res)
    })
  })
})

