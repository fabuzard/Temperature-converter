const form = document.getElementById("formTemperature");
const result = document.querySelector(".answers");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const temp = parseFloat(document.getElementById("value").value);
  const fromUnit = document.getElementById("fromDropdown").value;
  const toUnit = document.getElementById("toDropdown").value;

  // Check if the temperature input or the dropdown selections are empty
  if (isNaN(temp) || fromUnit === "" || toUnit === "") {
    result.textContent = "Please enter valid temperature values and units.";
    return; // Exit early if inputs are invalid
  }

  let convertedTemp;

  if (fromUnit === toUnit) {
    convertedTemp = temp;
  } else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
    convertedTemp = (temp * 9) / 5 + 32;
  } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
    convertedTemp = ((temp - 32) * 5) / 9;
  } else if (fromUnit === "celsius" && toUnit === "kelvin") {
    convertedTemp = temp + 273.15;
  } else if (fromUnit === "kelvin" && toUnit === "celsius") {
    convertedTemp = temp - 273.15;
  } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
    convertedTemp = ((temp - 32) * 5) / 9 + 273.15;
  } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
    convertedTemp = ((temp - 273.15) * 9) / 5 + 32;
  }

  // Display the conversion result
  result.textContent = `${temp} ${fromUnit} is ${convertedTemp} ${toUnit}`;
});
