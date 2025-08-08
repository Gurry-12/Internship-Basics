const now = new Date();
document.getElementById("display").innerHTML = now.toLocaleString();
document.getElementById("display1").innerHTML = now.toUTCString();

  // Generate a random date between two given dates (e.g., between 2020 and 2025)
  function Random_date() {
    const start = new Date(2020, 0, 1); // January 1, 2020
    const end = new Date(2025, 11, 31); // December 31, 2025
    const randomDate = getRandomDate(start, end);
    document.getElementById("ist").innerHTML = "ist : " + randomDate.toLocaleString();
    document.getElementById("utc").innerHTML = "utc : " + randomDate.toUTCString();
    
  }


// Function to generate a random date within a specific range
  function getRandomDate(startDate, endDate) {
    const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
    return new Date(randomTime);
  }
  