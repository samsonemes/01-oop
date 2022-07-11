// OOP
class inputField {
  constructor(id) {
    this.id = id;
  }

  getNumber() {
    const value = document.getElementById(this.id).value;
    return parseInt(value);
  }
}

class Form {
  static outputField = document.getElementById("sum");

  static addNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  }

  static displaySum(res) {
    this.outputField.textContent = res;
  }
}

const num1 = new inputField("num1");
const num2 = new inputField("num2");

function handler() {
  const res = Form.addNumbers(num1, num2);
  Form.displaySum(res);
}
