"use strict";
let counterNmbr = document.getElementById("counterNmbr");
let counterNmbrBtn = document.getElementById("counterNmbrBtn");
let inputVal;

counterNmbrBtn.addEventListener("click", () => {
    alert("clicked");
  let counterRegex = /\d/g;
  inputVal = Number(counterNmbr.value.match(counterRegex).join(""));
  let sendUrl = "http://192.168.4.1/token";

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "text / plain",
    },
    body: JSON.stringify(inputVal),
  };

  fetch(sendUrl, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Resopnse was not OK");
      }
      response.json();
    })
    .then((data) => {
      //   console.log(data);
      alert("Success");
    })

    // .catch((e) => {
    //   alert(e);
    // });
});

const data = {
  number: inputVal,
};
console.log(data.number);
