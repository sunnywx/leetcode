import sol1 from './sol-1'
import sol2 from './sol-2'

describe(`longest substring`, ()=> {
  const s1='abcabcddf'
  const s2='au'
  const s3='bbb'

  it('sol-1', ()=> {
    expect(sol1(s1)).toBe(4)
    expect(sol1(s2)).toBe(2)
    expect(sol1(s3)).toBe(1)
  })

  it('sol-2', ()=> {
    expect(sol2(s1)).toBe(4)
    expect(sol2(s2)).toBe(2)
    expect(sol2(s3)).toBe(1)
  })
})