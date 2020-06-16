import { leapYear } from '../src/leapYear'

describe('Leap Year Kata', () => {
  it('El año 1 no es bisiesto', () => {
    const result = leapYear(1)

    expect(result).toBe(false)
  })
})
