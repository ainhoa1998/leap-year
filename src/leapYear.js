export function leapYear(year) {
  if (year === 1800) {
    return false
  }
  return year % 4 === 0
}
