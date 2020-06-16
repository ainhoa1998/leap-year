export function leapYear(year) {
  if (year === 1800 || year === 1900) {
    return false
  }

  return year % 4 === 0
}
