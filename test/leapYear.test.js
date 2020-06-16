import { leapYear } from '../src/leapYear'

describe('Kata año bisiesto', () => {
  it('Si el año es 1, devuelve false', () => {
    const isLeap = leapYear(1)

    expect(isLeap).toBe(false)
  })

  it('Si el año es 2, devuelve false', () => {
    const isLeap = leapYear(2)

    expect(isLeap).toBe(false)
  })

  it('Si el año es 3, devuelve false', () => {
    const isLeap = leapYear(3)

    expect(isLeap).toBe(false)
  })

  it('Si el año es 4, devuelve true', () => {
    const isLeap = leapYear(4)

    expect(isLeap).toBe(true)
  })

  it('Si el año es 8, devuelve true', () => {
    const isLeap = leapYear(8)

    expect(isLeap).toBe(true)
  })

  it('Si el año es 12, devuelve true', () => {
    const isLeap = leapYear(12)

    expect(isLeap).toBe(true)
  })

  it('Si el año es 100, devuelve false', () => {
    const isLeap = leapYear(100)

    expect(isLeap).toBe(false)
  })

  it('Si el año es 200, devuelve false', () => {
    const isLeap = leapYear(200)

    expect(isLeap).toBe(false)
  })

  it('Si el año es 300, devuelve false', () => {
    const isLeap = leapYear(300)

    expect(isLeap).toBe(false)
  })
})
