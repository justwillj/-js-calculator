const addValues = (event) => {
  let total = 0;
  const value1 = document.querySelector("#Value1").value;
  const value2 = document.querySelector("#Value2").value;
  total = +value1 + +value2;

  const answer = document.querySelector("#answer");
  //https://www.w3schools.com/jsref/dom_obj_text.asp
  answer.setAttribute("value", total);
};
document.querySelector("#add").addEventListener("click", addValues);

const subtractValues = (event) => {
  let total = 0;
  const value1 = document.querySelector("#Value1").value;
  const value2 = document.querySelector("#Value2").value;
  total = value1 - value2;

  const answer = document.querySelector("#answer");
  //https://www.w3schools.com/jsref/dom_obj_text.asp
  answer.setAttribute("value", total);
};
document.querySelector("#subtract").addEventListener("click", subtractValues);

const divideValues = (event) => {
  let total = 0;
  const value1 = document.querySelector("#Value1").value;
  const value2 = document.querySelector("#Value2").value;
  if (value1 == 0 || value2 == 0) {
    answer.setAttribute("value", "Error: Cannot divide by 0");
  } else {
    total = value1 / value2;
    //https://www.w3schools.com/jsref/dom_obj_text.asp
    answer.setAttribute("value", total);
  }
};
document.querySelector("#divide").addEventListener("click", divideValues);

const multiplyValues = (event) => {
  const value1 = document.querySelector("#Value1").value;
  const value2 = document.querySelector("#Value2").value;
};
