import '../styles/main.scss';

let calcHistory = [];

const historyElement = document.createElement('div');
historyElement.id = 'history-wrapper';
document.body.appendChild(historyElement);

const outputElement = document.createElement('div');
outputElement.id = 'output-wrapper';
document.body.appendChild(outputElement);

const calcWrapper = document.createElement('div');
calcWrapper.id = 'calculator-wrapper';
document.body.appendChild(calcWrapper);

const numbersWrapper = document.createElement('div');
numbersWrapper.id = 'numbers-wrapper';
calcWrapper.appendChild(numbersWrapper);

const operatorsWrapper = document.createElement('div');
operatorsWrapper.id = 'operators-wrapper';
calcWrapper.appendChild(operatorsWrapper);

const buttons = [
  {
    text: '1'
  },
  {
    text: '2'
  },
  {
    text: '3'
  },
  {
    text: '4'
  },
  {
    text: '5'
  },
  {
    text: '6'
  },
  {
    text: '7'
  },
  {
    text: '8'
  },
  {
    text: '9'
  },
  {
    text: '0'
  },
  {
    text: '+',
    operator: 'sum'
  },
  {
    text: '-',
    operator: 'subtract'
  },
  {
    text: '/',
    operator: 'divide'
  },
  {
    text: 'x',
    operator: 'muliply'
  }
];

function addToHistory(action) {
  if (action.operator && calcHistory.length && calcHistory[calcHistory.length - 1].operator) {
    calcHistory.pop();
  }
  calcHistory.push(action);
  renderHistory();
}

function calculateNumbers() {
  let numbers = [];
  let operator;
  for (let i = calcHistory.length - 2; i == 0; i--) {}
}

function renderOutput() {}

function renderHistory() {
  const historyList = calcHistory.map(historyItem => historyItem.text);
  historyElement.innerText = historyList.join('');
  console.log(calcHistory);
}

function handleButtonClick(e, button) {
  e.preventDefault();
  addToHistory(button);
  if (button.operator) {
    calculateNumbers();
  }
}

buttons.forEach(button => {
  const btnElement = document.createElement('button');
  btnElement.innerText = button.text;
  btnElement.addEventListener('click', function(e) {
    handleButtonClick(e, button);
  });
  if (button.operator) {
    operatorsWrapper.appendChild(btnElement);
  } else {
    numbersWrapper.appendChild(btnElement);
  }
});

// const operators = buttons.filter(btn => btn.operator);
// const numbers = buttons.filter(btn => !btn.operator);

// numbers.forEach(button => {
//   const btnElement = document.createElement('button');
//   btnElement.innerText = button.text;
//   numbersWrapper.appendChild(btnElement);
// });

// operators.forEach(button => {
//   const btnElement = document.createElement('button');
//   btnElement.innerText = button.text;
//   operatorsWrapper.appendChild(btnElement);
// });
