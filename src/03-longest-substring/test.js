import sol1 from './sol-1'

describe(`longest substring`, ()=> {
  it('sol-1', ()=> {
    const s1='abcabcddf'
    const s2='au'
    const s3='bbb'
    expect(sol1(s1)).toBe(4)
    expect(sol1(s2)).toBe(2)
    expect(sol1(s3)).toBe(1)
  })
})