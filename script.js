const display = document.getElementById('display');
let a = '', b = '', op = null;

document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.key;
    const operator = btn.dataset.op;

    if (key != null) {
      if (op === null) {
        a += key;
        display.value = a;
      } else {
        b += key;
        display.value = b;
      }
    } else if (operator) {
      if (a !== '') op = operator;
    } else if (btn.id === 'equals') {
      if (a && op && b) {
        const result = calculate(a, op, b);
        display.value = result;
        a = result.toString();
        b = '';
        op = null;
      }
    } else if (btn.id === 'clear') {
      a = b = '';
      op = null;
      display.value = '';
    }
  });
});

