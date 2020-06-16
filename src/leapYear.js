export function leapYear(year) {
  return (
    (isYearDivisibleBy(year, 4) && !isYearDivisibleBy(year, 100)) ||
    isYearDivisibleBy(year, 400)
  )
}

function isYearDivisibleBy(year, value) {
  return year % value === 0
}
