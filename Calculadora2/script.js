document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('input[type="button"]');
    let current = '';
    let firstOperand = '';
    let operator = '';
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.value.match(/[0-9\.]/)) {
                current += button.value;
                display.value = current;
            } else if (button.value.match(/[\+\-\*\/]/)) {
                if (current === '') return;
                if (firstOperand !== '') {
                    calculate();
                }
                firstOperand = current;
                operator = button.value;
                current = '';
            } else if (button.value === '=') {
                if (firstOperand === '' || current === '') return;
                calculate();
                operator = '';
            } else if (button.value === 'DEL' ) {
                current = current.slice(0, -1);
                display.value = current;
            
            } else if (button.value === 'AC') {
                current = '';
                firstOperand = '';
                operator = '';
                display.value = '';
            }
        });
    });

    function calculate() {
        const num1 = parseFloat(firstOperand);
        const num2 = parseFloat(current);
        let result = 0;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    result = 'Error';
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                return;
        }
        display.value = result;
        current = result.toString();
        firstOperand = '';
    }
});