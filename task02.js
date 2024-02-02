const weight = 60;
const height = 200;

const height_meters = height / 100;

const BMI = weight / (height_meters * height_meters);
console.log("BMI : ", BMI.toFixed(2));

if (BMI < 18.5) {
  console.log("Health Category : Underweight");
} 
else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("Health Category : Normal");
} 
else if (BMI >= 25 && BMI <= 29.9) {
  console.log("Health Category : Overweight");
} 
else {
  console.log("Health Category:Obese");
}
