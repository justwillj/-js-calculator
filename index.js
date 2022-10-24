const addValues = (event) => {
  let total = 0;
  const value1 = document.querySelector("#Value1").value;
  const value2 = document.querySelector("#Value2").value;
  const answer = document.querySelector("#answer");
  if (value1 === "" || value2 === "") {
    answer.setAttribute("value", "Error: Please enter a number!");
  } else {
    total = +value1 + +value2;
    //https://www.w3schools.com/jsref/dom_obj_text.asp
    answer.setAttribute("value", total);
  }

  const memoryOfValues = (event) => {
    const memoryInput = document.querySelector("#memory-input");
    memoryInput.setAttribute("value", total);
  };
  document.querySelector("#memory").addEventListener("click", memoryOfValues);
};
document.querySelector("#add").addEventListener("click", addValues);

const subtractValues = (event) => {
  let total = 0;
  const value1 = document.querySelector("#Value1").value;
  const value2 = document.querySelector("#Value2").value;
  if (value1 === "" || value2 === "") {
    answer.setAttribute("value", "Error: Please enter a number!");
  } else {
    total = value1 - +value2;
    //https://www.w3schools.com/jsref/dom_obj_text.asp
    answer.setAttribute("value", total);
  }

  const memoryOfValues = (event) => {
    const memoryInput = document.querySelector("#memory-input");
    memoryInput.setAttribute("value", total);
  };
  document.querySelector("#memory").addEventListener("click", memoryOfValues);
};
document.querySelector("#subtract").addEventListener("click", subtractValues);

const divideValues = (event) => {
  let total = 0;
  const value1 = document.querySelector("#Value1").value;
  const value2 = document.querySelector("#Value2").value;
  if (value1 === "" || value2 === "") {
    answer.setAttribute("value", "Error: Please enter a number!");
  } else {
    if (value1 == 0 || value2 == 0) {
      answer.setAttribute("value", "Error: Cannot divide by 0");
    } else {
      total = value1 / value2;
      //https://www.w3schools.com/jsref/dom_obj_text.asp
      answer.setAttribute("value", total);
    }
  }

  const memoryOfValues = (event) => {
    const memoryInput = document.querySelector("#memory-input");
    memoryInput.setAttribute("value", total);
  };
  document.querySelector("#memory").addEventListener("click", memoryOfValues);
};
document.querySelector("#divide").addEventListener("click", divideValues);

const multiplyValues = (event) => {
  let total = 0;
  const value1 = document.querySelector("#Value1").value;
  const value2 = document.querySelector("#Value2").value;
  const answer = document.querySelector("#answer");
  if (value1 === "" || value2 === "") {
    answer.setAttribute("value", "Error: Please enter a number!");
  } else {
    total = value1 * value2;
    //https://www.w3schools.com/jsref/dom_obj_text.asp
    answer.setAttribute("value", total);
  }

  const memoryOfValues = (event) => {
    const memoryInput = document.querySelector("#memory-input");
    memoryInput.setAttribute("value", total);
  };
  document.querySelector("#memory").addEventListener("click", memoryOfValues);
};
document.querySelector("#multiply").addEventListener("click", multiplyValues);

const poweroFValues = (event) => {
  let total = 0;
  const value1 = document.querySelector("#Value1").value;
  const value2 = document.querySelector("#Value2").value;
  const answer = document.querySelector("#answer");
  if (value1 === "" || value2 === "") {
    answer.setAttribute("value", "Error: Please enter a number!");
  } else {
    total = value1 ** value2;
    //https://www.w3schools.com/jsref/dom_obj_text.asp
    answer.setAttribute("value", total);
  }

  const memoryOfValues = (event) => {
    const memoryInput = document.querySelector("#memory-input");
    memoryInput.setAttribute("value", total);
  };
  document.querySelector("#memory").addEventListener("click", memoryOfValues);
};
document.querySelector("#power").addEventListener("click", poweroFValues);

const sqaureRootoFValues = (event) => {
  let total = 0;
  const value1 = document.querySelector("#Value1").value;
  const answer = document.querySelector("#answer");
  if (value1 === "") {
    answer.setAttribute("value", "Error: Please enter a number!");
  } else {
    total = Math.sqrt(value1);
    //https://www.w3schools.com/jsref/dom_obj_text.asp
    answer.setAttribute("value", total);
  }

  const memoryOfValues = (event) => {
    const memoryInput = document.querySelector("#memory-input");
    memoryInput.setAttribute("value", total);
  };
  document.querySelector("#memory").addEventListener("click", memoryOfValues);
};
document.querySelector("#square").addEventListener("click", sqaureRootoFValues);
