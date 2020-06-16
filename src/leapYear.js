export function leapYear(year) {
  if (year === 400) {
    return true
  }

  return year % 4 === 0 && year % 100 !== 0
}
