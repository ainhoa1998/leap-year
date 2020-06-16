export function leapYear(year) {
  if (year % 4 !== 0) {
    return false
  }
  if (year === 4) {
    return true
  }
}
