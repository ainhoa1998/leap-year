export function leapYear(year) {
  return isYearDivisibleByValue(year, 100)
    ? isYearDivisibleByValue(year, 400)
    : isYearDivisibleByValue(year, 4)
}

function isYearDivisibleByValue(year, value) {
  return year % value === 0
}
