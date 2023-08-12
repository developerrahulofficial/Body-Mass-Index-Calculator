# Body Mass Index Calculator

![Design preview for the Body Mass Index Calculator coding challenge](./preview.jpg)

## Welcome! 👋

Sure, I can help you create a detailed blog post explaining how to create a Body Mass Index (BMI) calculator using HTML, CSS, and JavaScript. Let's break down the process step by step.

## Creating a Body Mass Index (BMI) Calculator using HTML, CSS, and JavaScript

### Introduction
In this tutorial, we will walk you through the process of creating a Body Mass Index (BMI) calculator using HTML, CSS, and JavaScript. BMI is a widely used measure to assess whether a person has a healthy body weight in relation to their height. This calculator will allow users to input their height and weight in either metric or imperial units and display their BMI along with a classification and some additional information.

### Prerequisites
Before we begin, make sure you have a basic understanding of HTML, CSS, and JavaScript.

### Setting Up the HTML Structure
Let's start by setting up the basic HTML structure for our BMI calculator. Create a new HTML file and add the following code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <title>Body Mass Index Calculator</title>
</head>
<body>
  <!-- Your calculator content goes here -->
  <script src="app.js"></script>
</body>
</html>
```

### Designing the Calculator Interface with CSS
Now, let's style our calculator using CSS. Create a new file named `style.css` and add the CSS code provided in your original question. This CSS code is responsible for the layout, colors, fonts, and responsiveness of the BMI calculator.

### Adding Functionality with JavaScript
Next, let's implement the JavaScript functionality to calculate the BMI based on user input. Create a new file named `app.js` and add the following JavaScript code:

```javascript
// Get DOM elements
const form = document.getElementById("form");
const resultContainer = document.getElementById("container-result");
const bmiResult = document.getElementById("result");
const classification = document.getElementById("classification");
const minWeight = document.getElementById("min-weight");
const maxWeight = document.getElementById("max-weight");

// Add event listener to the form
form.addEventListener("input", calculateBMI);

// Function to calculate BMI
function calculateBMI() {
  // Get user input values
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const feet = parseFloat(document.getElementById("feet").value);
  const inch = parseFloat(document.getElementById("inch").value);
  const st = parseFloat(document.getElementById("st").value);
  const lbs = parseFloat(document.getElementById("lbs").value);

  // Calculate BMI
  let bmi = 0;
  if (form.querySelector(".active").value === "metric") {
    bmi = weight / ((height / 100) ** 2);
  } else {
    const totalInches = feet * 12 + inch;
    bmi = (lbs / (totalInches ** 2)) * 703;
  }

  // Display BMI result
  resultContainer.style.display = "block";
  bmiResult.textContent = bmi.toFixed(1);

  // Determine classification
  if (bmi < 18.5) {
    classification.textContent = "Underweight";
  } else if (bmi < 24.9) {
    classification.textContent = "Healthy";
  } else if (bmi < 29.9) {
    classification.textContent = "Overweight";
  } else {
    classification.textContent = "Obese";
  }

  // Display ideal weight range
  const idealMin = 18.5 * ((height / 100) ** 2);
  const idealMax = 24.9 * ((height / 100) ** 2);
  minWeight.textContent = idealMin.toFixed(1);
  maxWeight.textContent = idealMax.toFixed(1);
}
```

### Conclusion
Congratulations! You've successfully created a Body Mass Index (BMI) calculator using HTML, CSS, and JavaScript. Users can now input their height and weight in either metric or imperial units and get their BMI along with a classification and ideal weight range.

Remember that while BMI can be a useful tool, it has its limitations and should not be the sole indicator of health. Always consult with a healthcare professional for a comprehensive assessment of your health.

Feel free to further customize the design, add validation, or enhance the functionality of the calculator according to your preferences.

I hope this detailed blog post helps you create your BMI calculator. Happy coding!

**Have fun building!** 🚀
