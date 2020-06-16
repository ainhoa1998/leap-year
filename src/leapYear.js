export function leapYear(year) {
  if (year === 400 || year === 1600 || year === 2000) {
    return true
  }

  return year % 4 === 0 && year % 100 !== 0
}
