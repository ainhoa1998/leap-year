export function leapYear(year) {
  return (
    (isYearDivisibleByValue(year, 4) && !isYearDivisibleByValue(year, 100)) ||
    isYearDivisibleByValue(year, 400)
  )
}

function isYearDivisibleByValue(year, value) {
  return year % value === 0
}
