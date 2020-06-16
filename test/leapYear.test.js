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

  it('Devuelve si el año 3 es bisiesto', () => {
    const isLeap = leapYear(3)

    expect(isLeap).toBe(false)
  })

  it('Devuelve si el año 4 es bisiesto', () => {
    const isLeap = leapYear(4)

    expect(isLeap).toBe(true)
  })

  it('Devuelve si el año 8 es bisiesto', () => {
    const isLeap = leapYear(8)

    expect(isLeap).toBe(true)
  })

  it('Devuelve si el año 12 es bisiesto', () => {
    const isLeap = leapYear(12)

    expect(isLeap).toBe(true)
  })
})
