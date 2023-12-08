function minDate(dates) {
  if (!dates || dates.length === 0) {
    return null;
  }

  // Clone the array to avoid modifying the input array
  const clonedDates = [...dates];

  // Parse the first date as the initial minimum
  let minDateValue = new Date(clonedDates[0]);

  // Loop through the remaining dates and update the minimum if needed
  for (let i = 1; i < clonedDates.length; i++) {
    const currentDate = new Date(clonedDates[i]);

    if (currentDate < minDateValue) {
      minDateValue = currentDate;
    }
  }

  // Format the minimum date as "YYYY/MM/DD"
  const minDateFormatted = `${minDateValue.getFullYear()}/${padZeroes(
    minDateValue.getMonth() + 1
  )}/${padZeroes(minDateValue.getDate())}`;

  return minDateFormatted;
}

// Helper function to pad zeroes for single-digit months and days
function padZeroes(number) {
  return number.toString().padStart(2, '0');
}

// Examples
console.log(minDate(["2023/03/01", "2023/03/02", "2023/03/03"])); // "2023/03/01"
console.log(minDate(["2023/01/01", "2023/02/02", "2022/12/31"])); // "2022/12/31"

