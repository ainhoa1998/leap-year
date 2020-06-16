describe('Leap Year Kata', () => {
  it('El año 1 no es bisiesto', () => {
    const result = leapYear(1)

    expect(result).toBe(false)
  })
})

function leapYear() {
  return false
}
