const age = 65;
if (age < 10) {
  console.log("Children's Ticket fare : Free");
} 
else if (age >= 10 && age <= 30) {
  const fee = 800 / 2;
  console.log("Student's Ticket fare : ", fee, "tk");
} 
else if (age >= 60) {
  fee = 800 * 0.85;
  console.log("Senior citizens fare : ", fee, "tk");
} else {
  console.log("Regular Ticket fare : 800tk");
}
