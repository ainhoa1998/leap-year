describe('Kata año bisiesto', () => {
  it('Devuelve si el año 1 es bisiesto', () => {
    const isLeap = leapYear(1)

    expect(isLeap).toBe(false)
  })
})

function leapYear() {
  return false
}
