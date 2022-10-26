/**
 * gets the 2 values from the inputs and adds them together
 * @param {click} event - when the user clicks on the operation, calls the function
 * @returns {number} - returns the 2 numbers added up
 */
const addValues = (event) => {
  let total = 0;
  /*CODE REVIEW: since you are getting the values of the inputs in every function we should move this functionality into its own function so we can call it whenever we need to get the values */
  const value1 = document.querySelector("#Value1").value;
  const value2 = document.querySelector("#Value2").value;
  /*CODE REVIEW: anything to do with displaying the 'answer' can be moved into its own function and we can call it anytime we need to display an answer */
  const answer = document.querySelector("#answer");
  if (value1 === "" || value2 === "") {
    /*CODE REVIEW: intersting choice using an input to display your 'answers', usually we want to not use an input for showing values, we want to stick to uneditable fields like a paragraph or div */ 
    answer.setAttribute("value", "Error: Please enter a number!");
  } else {
    /*CODE REVIEW: nice job with the typecasting here, but instead of using a unary operator (+) we want to use the Number() typecast */
    total = +value1 + +value2;
    //https://www.w3schools.com/jsref/dom_obj_text.asp
    answer.setAttribute("value", total);
  }
  /*CODE REVIEW: why is this memoryOfValues function show up in your code 6 times? We don't redeclare functions multiple times, we declare a function and that's it. */ 
  /**
   * stores the last answer so the user can recall it
   * @param {click} event - when the user clicks on the button, runs the function
   * @returns {number} - returns the last answer the calculator made
   */
  const memoryOfValues = (event) => {
    const memoryInput = document.querySelector("#memory-input");
    memoryInput.setAttribute("value", total);
  };
  document.querySelector("#memory").addEventListener("click", memoryOfValues);
};
/*CODE REVIEW: remember we want to group our addEventListeners into one space so that we can easily find them and not have to dig thorugh all our code when debugging */
document.querySelector("#add").addEventListener("click", addValues);

/**
 * gets the 2 values from the inputs and subtracts them
 * @param {click} event - when the user clicks on the operation, calls the function
 * @returns {number} - returns the total = value1 - value2
 */
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

  /**
   * stores the last answer so the user can recall it
   * @param {click} event - when the user clicks on the button, runs the function
   * @returns {number} - returns the last answer the calculator made
   */
  const memoryOfValues = (event) => {
    const memoryInput = document.querySelector("#memory-input");
    memoryInput.setAttribute("value", total);
  };
  document.querySelector("#memory").addEventListener("click", memoryOfValues);
};
document.querySelector("#subtract").addEventListener("click", subtractValues);

/**
 * gets the 2 values from the inputs and divides them
 * @param {click} event - when the user clicks on the operation, calls the function
 * @returns {number} - returns the 2 numbers after they have been divided
 */
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

  /**
   * stores the last answer so the user can recall it
   * @param {click} event - when the user clicks on the button, runs the function
   * @returns {number} - returns the last answer the calculator made
   */
  const memoryOfValues = (event) => {
    const memoryInput = document.querySelector("#memory-input");
    memoryInput.setAttribute("value", total);
  };
  document.querySelector("#memory").addEventListener("click", memoryOfValues);
};
document.querySelector("#divide").addEventListener("click", divideValues);

/**
 * gets the 2 values from the inputs and multiply them together
 * @param {click} event - when the user clicks on the operation, calls the function
 * @returns {number} - returns the 2 numbers after they have been multiplied
 */
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

  /**
   * stores the last answer so the user can recall it
   * @param {click} event - when the user clicks on the button, runs the function
   * @returns {number} - returns the last answer the calculator made
   */
  const memoryOfValues = (event) => {
    const memoryInput = document.querySelector("#memory-input");
    memoryInput.setAttribute("value", total);
  };
  document.querySelector("#memory").addEventListener("click", memoryOfValues);
};
document.querySelector("#multiply").addEventListener("click", multiplyValues);

/**
 * get the power of a value based off the inputs
 * @param {click} event - when the user clicks on the operation, calls the function
 * @returns {number} - returns the power of value1 with value2 being what the power is
 */
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

  /**
   * stores the last answer so the user can recall it
   * @param {click} event - when the user clicks on the button, runs the function
   * @returns {number} - returns the last answer the calculator made
   */
  const memoryOfValues = (event) => {
    const memoryInput = document.querySelector("#memory-input");
    memoryInput.setAttribute("value", total);
  };
  document.querySelector("#memory").addEventListener("click", memoryOfValues);
};
document.querySelector("#power").addEventListener("click", poweroFValues);

/**
 * gets the square root of value1
 * @param {click} event - when the user clicks on the operation, calls the function
 * @returns {number} - returns the square root of value1
 */
const squareRootoFValues = (event) => {
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

  /**
   * stores the last answer so the user can recall it
   * @param {click} event - when the user clicks on the button, runs the function
   * @returns {number} - returns the last answer the calculator made
   */
  const memoryOfValues = (event) => {
    const memoryInput = document.querySelector("#memory-input");
    memoryInput.setAttribute("value", total);
  };
  document.querySelector("#memory").addEventListener("click", memoryOfValues);
};
document.querySelector("#square").addEventListener("click", squareRootoFValues);
