export function leapYear(year) {
  if (yearIsDivisibleBy(year, 400)) {
    return true
  }

  return yearIsDivisibleBy(year, 4) && !yearIsDivisibleBy(year, 100)
}

function yearIsDivisibleBy(year, value) {
  return year % value === 0
}
