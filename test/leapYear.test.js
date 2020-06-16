import { leapYear } from '../src/leapYear'

describe('Kata año bisiesto', () => {
  it('Devuelve si el año 1 es bisiesto', () => {
    const isLeap = leapYear(1)

    expect(isLeap).toBe(false)
  })

  it('Devuelve si el año 2 es bisiesto', () => {
    const isLeap = leapYear(2)

    expect(isLeap).toBe(false)
  })
})
