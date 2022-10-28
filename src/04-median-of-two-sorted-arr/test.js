import sol1 from './sol-1'

describe(`median of two sorted array`, ()=> {
  const a1=[1,2,3,10,8]
  const a2=[5,8,2,7]

  it(`sol-1`, ()=> {
    expect(sol1(a1, a2)).toEqual(5)
  })
})