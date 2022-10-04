//Este archivo es el default, hay funciones que no usé

let display = document.getElementById("screen");
let buttons = document.getElementsByClassName("button");

Array.prototype.forEach.call(buttons, function (button) {
  button.addEventListener("click", function () {
    if (
      button.textContent != "=" &&
      button.textContent != "C" &&
      button.textContent != "x" &&
      button.textContent != "÷" &&
      button.textContent != "√" &&
      button.textContent != "x²" &&
      button.textContent != "%" &&
      button.textContent != "<=" &&
      button.textContent != "±" &&
      button.textContent != "sin" &&
      button.textContent != "cos" &&
      button.textContent != "tan" &&
      button.textContent != "log" &&
      button.textContent != "ln" &&
      button.textContent != "x^" &&
      button.textContent != "x!" &&
      button.textContent != "π" &&
      button.textContent != "e" &&
      button.textContent != "³√" &&
      button.textContent != "n√" &&
      button.textContent != "x³"
    ) {
      display.value += button.textContent;
    } else if (button.textContent === "=") {
      equals();
    } else if (button.textContent === "C") {
      clear();
    } else if (button.textContent === "x") {
      multiply();
    } else if (button.textContent === "÷") {
      divide();
    } else if (button.textContent === "±") {
      plusMinus();
    } else if (button.textContent === "<=") {
      backspace();
    } else if (button.textContent === "%") {
      percent();
    } else if (button.textContent === "π") {
      pi();
    } else if (button.textContent === "x²") {
      square();
    } else if (button.textContent === "√") {
      squareRoot();
    } else if (button.textContent === "sin") {
      sin();
    } else if (button.textContent === "cos") {
      cos();
    } else if (button.textContent === "tan") {
      tan();
    } else if (button.textContent === "log") {
      log();
    } else if (button.textContent === "ln") {
      ln();
    } else if (button.textContent === "x^") {
      exponent();
    } else if (button.textContent === "x!") {
      factorial();
    } else if (button.textContent === "e") {
      exp();
    } else if (button.textContent === "³√") {
      cubeRoot();
    } else if (button.textContent === "n√") {
      nRoot();
    } else if (button.textContent === "x³") {
      cube();
    }
  });
});

function syntaxError() {
  if (
    eval(display.value) == SyntaxError ||
    eval(display.value) == ReferenceError ||
    eval(display.value) == TypeError
  ) {
    display.value == "Syntax Error";
  }
}

function equals() {
  if (display.value.indexOf("^") > -1) {
    let base = display.value.slice(0, display.value.indexOf("^"));
    let exponent = display.value.slice(display.value.indexOf("^") + 1);
    display.value = eval("Math.pow(" + base + "," + exponent + ")");
  } else if (display.value.indexOf("√") > -1) {
    let root = display.value.slice(0, display.value.indexOf("√"));
    let baseR = display.value.slice(display.value.indexOf("√") + 1);
    display.value = eval("Math.pow(" + baseR + ", 1/" + root + ")");
  } else {
    display.value = eval(display.value);
    syntaxError();
  }
}

function clear() {
  display.value = "";
}

function backspace() {
  display.value = display.value.substring(0, display.value.length - 1);
}

function multiply() {
  display.value += "*";
}

function divide() {
  display.value += "/";
}

function plusMinus() {
  if (display.value.charAt(0) === "-") {
    display.value = display.value.slice(1);
  } else {
    display.value = "-" + display.value;
  }
}

function factorial() {
  var number = 1;
  if (display.value === 0) {
    display.value = "1";
  } else if (display.value < 0) {
    display.value = "undefined";
  } else {
    var number = 1;
    for (var i = display.value; i > 0; i--) {
      number *= i;
    }
    display.value = number;
  }
}

function pi() {
  let lastChar = display.value.charAt(display.value.length - 1);
  if (
    lastChar === "*" ||
    lastChar === "/" ||
    lastChar === "+" ||
    lastChar === "-" ||
    lastChar === "^" ||
    lastChar === "√"
  ) {
    console.log("si");
    display.value += Math.PI;
  } else {
    console.log("no");
    display.value = Math.PI;
  }
}

function square() {
  display.value = eval(display.value * display.value);
}

function squareRoot() {
  display.value = Math.sqrt(display.value);
}

function cube() {
  display.value = eval(display.value * display.value * display.value);
}

function cubeRoot() {
  display.value = Math.cbrt(display.value);
}

function percent() {
  display.value = display.value / 100;
}

function sin() {
  display.value = Math.sin(display.value);
}

function cos() {
  display.value = Math.cos(display.value);
}

function tan() {
  display.value = Math.tan(display.value);
}

function log() {
  display.value = Math.log10(display.value);
}

function ln() {
  display.value = Math.log(display.value);
}

function exponent() {
  display.value += "^";
}

function nRoot() {
  display.value += "√";
}

function exp() {
  display.value = Math.exp(display.value);
}
