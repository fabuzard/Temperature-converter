const form = document.getElementById("formTemperature");
const result = document.querySelector(".answers");
const submitbtn = document.querySelector(".submitbutton");
const fromUnt = document.getElementById("fromDropdown");
const toUnt = document.getElementById("toDropdown");
const container = document.querySelector(".dropDownContainer"); // Use class instead of ID
const inputValue = document.getElementById("value");

// Check if both dropdowns are valid, enable/disable button
// container.addEventListener("change", () => {
//   if (fromUnt.value !== "" && toUnt.value !== "" && inputValue.value !== "") {
//     submitbtn.disabled = false;
//   } else {
//     submitbtn.disabled = true;
//   }
// });

function validteForm() {
  if (fromUnt.value !== "" && toUnt.value !== "" && inputValue.value !== "") {
    submitbtn.disabled = false;
  } else {
    submitbtn.disabled = true;
  }
}

container.addEventListener("change", validteForm);
inputValue.addEventListener("change", validteForm);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const temp = parseFloat(document.getElementById("value").value);
  const fromUnit = fromUnt.value;
  const toUnit = toUnt.value;
  console.log(`temp = ${temp}`);

  // Check if the temperature input or the dropdown selections are empty
  if (isNaN(temp) || fromUnit === "" || toUnit === "") {
    result.textContent = "Please enter valid temperature values and units.";
    return; // Exit early if inputs are invalid
  }

  let convertedTemp;

  // Conversion logic
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

  console.log(convertedTemp);

  // Display the conversion result
  result.textContent = `${temp} ${fromUnit} is ${convertedTemp} ${toUnit}`;
});
