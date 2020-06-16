export function leapYear(year) {
  if (isYearDivisibleBy(year, 400)) {
    return true
  }

  return isYearDivisibleBy(year, 4) && !isYearDivisibleBy(year, 100)
}

function isYearDivisibleBy(year, value) {
  return year % value === 0
}
