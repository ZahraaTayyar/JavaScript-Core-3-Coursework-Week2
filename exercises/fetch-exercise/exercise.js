/*
Use fetch to load a greeting from the API and display it 
in the HTML element with the id "greeting-text".

API: https://codeyourfuture.herokuapp.com/api/greetings
Response: A greeting in a random language

To learn more about fetch, refer to the doc:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


================
Expected result
================

Open index.html in your browser. Every time you refresh the page,
a different greeting should be displayed in the box.
*/

// fetch("https://holy-snow-6805.fly.dev/api/greetings")
//   .then(function (response) {
//     return response.text();
//   })
//   .then(function (greeting) {
//     // Write the code to display the greeting text here
//     let greetingEL = document.getElementById("greeting-text");

//     greetingEL.innerHTML = `Language : ${greeting.language} \n Hello: ${greeting.hello}`
//   });

  fetch("https://holy-snow-6805.fly.dev/api/greetings")
    .then((response) => response.json())
    .then((data) => {
      let greetingEl = document.querySelector("#greeting-text");
      greetingEl.innerHTML = `${data.language}, ${data.hello}`
    })
    .catch((error) => console.log(error));

