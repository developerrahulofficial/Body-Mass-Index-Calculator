const form = document.getElementById('form');
const heightEl = document.getElementById('height');
const weightEl = document.getElementById('weight');
const feetEl = document.getElementById('feet');
const inchEl = document.getElementById('inch');
const stEl = document.getElementById('st');
const lbsEl = document.getElementById('lbs');
const classification = document.getElementById('classification');
const minWeight = document.getElementById('min-weight');
const maxWeight = document.getElementById('max-weight');
const resultEl = document.getElementById('result');
const containerResult = document.getElementById('container-result');
const bmiEl = document.getElementById('bmi');
const welcome = document.getElementById('welcome');

const metricBtn = document.getElementById('metric');
const imperialBtn = document.getElementById('imperial');

function calculateBMI(e) {
  console.log(metricBtn.classList);
  if (metricBtn.classList.contains('active')) {
    const height = heightEl.value;
    const weight = weightEl.value;

    bmiEl.style.display = 'flex';
    welcome.style.display = 'none';

    const bmi = ((weight / (height * height)) * 10000).toFixed(1);

    console.log(height);
    console.log(weight);
    console.log(bmi);

    const heightM = height / 100;
    console.log(heightM);

    const min = (18.5 * heightM * heightM).toFixed(1);
    const max = (24.9 * heightM * heightM).toFixed(1);

    resultEl.innerText = bmi;

    minWeight.innerText = `${min}kgs`;
    maxWeight.innerText = `${max}kgs`;

    if (bmi < 18.5) {
      classification.innerText = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      classification.innerText = 'Healthy weight';
    } else if (bmi > 24.9 && bmi <= 29.9) {
      classification.innerText = 'Overweight';
    } else {
      classification.innerText = 'Obese';
    }

    console.log('test');
  } else {
    const feet = parseInt(feetEl.value);
    const inch = parseInt(inchEl.value);
    const st = parseInt(stEl.value);
    const lbs = parseInt(lbsEl.value);

    bmiEl.style.display = 'flex';
    welcome.style.display = 'none';

    const heightInInches = feet * 12 + parseInt(inch);
    const weightInPounds = st * 14 + lbs;
    const bmi = (
      (703 * weightInPounds) /
      (heightInInches * heightInInches)
    ).toFixed(1);
    console.log(bmi);

    resultEl.innerText = bmi
    const minOptimalWeightPounds =
      (18.5 * (heightInInches * heightInInches)) / 703;
    const maxOptimalWeightPounds =
      (24.9 * (heightInInches * heightInInches)) / 703;

    const minWeightInStone = Math.floor(minOptimalWeightPounds / 14);
    const minWeightInPounds = Math.round(minOptimalWeightPounds % 14);

    const maxWeightInStone = Math.floor(maxOptimalWeightPounds / 14);
    const maxWeightInPounds = Math.round(maxOptimalWeightPounds % 14);

    // Convert optimal weight to a single value in stones and pounds
    const optimalWeightValueInStone = Math.floor(
      (minOptimalWeightPounds + maxOptimalWeightPounds) / 2 / 14
    );
    const optimalWeightValueInPounds = Math.round(
      ((minOptimalWeightPounds + maxOptimalWeightPounds) / 2) % 14
    );

    minWeight.innerText = `${minWeightInStone}st ${minWeightInPounds}lbs`
    maxWeight.innerText = `${maxWeightInStone}st ${maxWeightInPounds}lbs`

    if (bmi < 18.5) {
      classification.innerText = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      classification.innerText = 'Healthy weight';
    } else if (bmi > 24.9 && bmi <= 29.9) {
      classification.innerText = 'Overweight';
    } else {
      classification.innerText = 'Obese';
    }
  }
}

// Limit input of height and length
function limitLength() {
  if (heightEl.value.length > 3 || weightEl.value.length > 3) {
    heightEl.value = heightEl.value.slice(0, 3);
    weightEl.value = weightEl.value.slice(0, 3);
  } else if (feetEl.value.length > 1) {
    feetEl.value = feetEl.value.slice(0, 1)
  } else if (inchEl.value.length > 2 || lbsEl.value.length > 2 || stEl.value.length > 2) {
    inchEl.value = inchEl.value.slice(0, 2)
    lbsEl.value = lbsEl.value.slice(0, 2)
    stEl.value = stEl.value.slice(0, 2)
    }
}

// Add Eventlistener
form.addEventListener('keydown', (e) => {
  if (
    (e.key === 'Enter' && heightEl.value !== '' && weightEl.value !== '') ||
    (e.key === 'Enter' &&
      feetEl.value !== '' &&
      ((inchEl.value !== '') !== stEl.value) !== '' &&
      lbsEl.value !== '')
  ) {
    e.preventDefault();
    calculateBMI();
  }
});

// Limit input
heightEl.addEventListener('input', limitLength);
weightEl.addEventListener('input', limitLength);
feetEl.addEventListener('input', limitLength)
inchEl.addEventListener('input', limitLength)
lbsEl.addEventListener('input', limitLength)
stEl.addEventListener('input', limitLength)

// Change radio button
const radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.value === 'imperial') {
      document.querySelector('.metric').style.display = 'none';
      document.querySelector('.imperial').style.display = 'block';
      e.target.classList.add('active');
      console.log(metricBtn);
      metricBtn.classList.remove('active');
    } else {
      document.querySelector('.metric').style.display = window.innerWidth < 768 ? 'block' : 'flex';
      document.querySelector('.imperial').style.display = 'none';
      imperialBtn.classList.remove('active');
      e.target.classList.add('active');
    }
  });
});

// Window rezise event
window.addEventListener('resize', e=> {
  if(window.innerWidth < 768) {
    document.querySelector('.metric').style.display = 'block'
  } else {
    document.querySelector('.metric').style.display = 'flex'
  }
})
