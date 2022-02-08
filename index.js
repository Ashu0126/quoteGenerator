var changeQuote = document
  .getElementById("generate")
  .addEventListener("click", buttonClick);

var newQuote = [
  '"The purpose of our lives is to be happy."',
  '"Life is what happens when youre busy making other plans."',
  '"Get busy living or get busy dying."',
  '"You only live once, but if you do it right, once is enough."',
  '"Many of lifes failures are people who did not realize how close they were to success when they gave up."',
  '"If you want to live a happy life, tie it to a goal, not to people or things."',
  '"Never let the fear of striking out keep you from playing the game."',
  '"Money and success dont change people; they merely amplify what is already there."',
  '"Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma which is living with the results of other peoples thinking."',
  '"Not how long, but how well you have lived is the main thing."',
];

var publish = document
  .getElementById("publish")
  .addEventListener("click", quoteBo);

var inputBox = document.querySelector(".text");

//add Box
function quoteBo(e) {
  inputBox.classList.toggle("active");
}

//Generate Button
function buttonClick(e) {
  const random = Math.floor(Math.random() * newQuote.length);
  document.getElementById("quotes").textContent = newQuote[random];
  document.getElementById("quotes").style.fontSize = "25px";
}
