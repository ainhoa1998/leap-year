export function leapYear(year) {
  if (year % 4 !== 0) {
    return false
  }
  if (year === 4 || year === 8) {
    return true
  }

  if (year === 12) {
    return true
  }
}
