export function leapYear(year) {
  if (year % 100 === 0 || year % 4 !== 0) {
    return false
  } else {
    return true
  }
}
