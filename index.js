const addValues = (event) => {
  let total = 0;
  const value1 = document.querySelector("#Value1").value;
  const value2 = document.querySelector("#Value2").value;
  total = +value1 + +value2;

  const answer = document.querySelector("#answer");
  //https://www.w3schools.com/jsref/dom_obj_text.asp
  answer.setAttribute("value", total);
};
