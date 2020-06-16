import { leapYear } from '../src/leapYear'

describe('Leap Year Kata', () => {
  it('El año 1 no es bisiesto', () => {
    const result = leapYear(1)

    expect(result).toBe(false)
  })

  it('El año 4 es bisiesto', () => {
    const result = leapYear(4)

    expect(result).toBe(true)
  })

  it('El año 8 es bisiesto', () => {
    const result = leapYear(8)

    expect(result).toBe(true)
  })

  it('El año 12 es bisiesto', () => {
    const result = leapYear(12)

    expect(result).toBe(true)
  })

  it('El año 1800 no es bisiesto', () => {
    const result = leapYear(1800)

    expect(result).toBe(false)
  })

  it('El año 1900 no es bisiesto', () => {
    const result = leapYear(1900)

    expect(result).toBe(false)
  })

  it('El año 2100 no es bisiesto', () => {
    const result = leapYear(2100)

    expect(result).toBe(false)
  })

  it('El año 400 es bisiesto', () => {
    const result = leapYear(400)

    expect(result).toBe(true)
  })

  it('El año 1600 es bisiesto', () => {
    const result = leapYear(1600)

    expect(result).toBe(true)
  })

  it('El año 2000 es bisiesto', () => {
    const result = leapYear(2000)

    expect(result).toBe(true)
  })
})
