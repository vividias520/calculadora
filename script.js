// script.js

function calculateRisk() {
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const cholesterol = parseInt(document.getElementById('cholesterol').value);
    const hdl = parseInt(document.getElementById('hdl').value);
    const sbp = document.getElementById('sbp').value;
    const weight = parseInt(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);
    const diabetes = document.getElementById('diabetes').value === 'yes';
    const smoker = document.getElementById('smoker').value === 'yes';
    const cvd = document.getElementById('cvd').value === 'yes';
    const af = document.getElementById('af').value === 'yes';
    const lvh = document.getElementById('lvh').value === 'yes';
    const claudication = document.getElementById('claudication').value === 'yes';

    if (isNaN(age) || isNaN(cholesterol) || isNaN(hdl) || isNaN(weight) || isNaN(height)) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    let risk = 0;

    if (gender === 'male') {
        if (age >= 45 && age <= 49) risk += 1;
        else if (age >= 50 && age <= 54) risk += 2;
        else if (age >= 55 && age <= 59) risk += 3;
        else if (age >= 60 && age <= 64) risk += 4;
        else if (age >= 65 && age <= 69) risk += 5;
        else if (age >= 70 && age <= 74) risk += 6;
        else if (age >= 75) risk += 7;
    } else {
        if (age >= 55 && age <= 59) risk += 1;
        else if (age >= 60 && age <= 64) risk += 2;
        else if (age >= 65 && age <= 69) risk += 3;
        else if (age >= 70 && age <= 74) risk += 4;
        else if (age >= 75) risk += 5;
    }

    if (cholesterol < 160) risk -= 3;
    else if (cholesterol >= 160 && cholesterol <= 199) risk -= 2;
    else if (cholesterol >= 200 && cholesterol <= 239) risk -= 1;
    else if (cholesterol >= 240 && cholesterol <= 279) risk += 1;
    else if (cholesterol >= 280) risk += 2;

    if (hdl >= 60) risk -= 1;
    else if (hdl >= 50 && hdl <= 59) risk -= 1;
    else if (hdl < 50) risk += 2;

    if (sbp === 'treated') risk += 2;
    else if (sbp >= 180) risk += 3;
    else if (sbp >= 160 && sbp <= 179) risk += 2;
    else if (sbp >= 140 && sbp <= 159) risk += 1;

    const bmi = weight / ((height / 100) ** 2);
    if (bmi < 18.5) risk += 2;
    else if (bmi >= 18.5 && bmi <= 24.9) risk -= 1;
    else if (bmi >= 25 && bmi <= 29.9) risk += 1;
    else if (bmi >= 30) risk += 2;

    if (diabetes) risk += 2;
    if (smoker) risk += 2;
    if (cvd) risk += 4;
    if (af) risk += 1;
    if (lvh) risk += 1;
    if (claudication) risk += 1;

    let riskCategory = '';
    if (risk <= 5) riskCategory = 'Baixo Risco';
    else if (risk <= 10) riskCategory = 'Risco Moderado';
    else riskCategory = 'Alto Risco';

    document.getElementById('result').innerHTML = `<p>Risco Cardiovascular: ${riskCategory}</p>`;
}
