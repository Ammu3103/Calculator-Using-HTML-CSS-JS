let string = "";
const inputField = document.querySelector('input');
const buttons = document.querySelectorAll('.btns');

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;
        if (buttonText === "=") {
            try {
                string = eval(string);
            } catch (err) {
                string = "Error";
            }
            inputField.value = string;
        } else if (buttonText === "x") {
            string += '*'; 
            inputField.value = string;
        } else if (buttonText === "÷") {
            string += '/';
            inputField.value = string;
        } else if (buttonText === "^") {
            if(string === "**"){
                string ='';
            }
            string += '**'; 
            inputField.value = string;
        } else if (buttonText === "√") {
            try {
                string = Math.sqrt(eval(string));
            } catch (err) {
                string = "Error"; 
            }
            inputField.value = string;
        } else if (buttonText === "%") {
            try {
                string = eval(string) / 100;
            } catch (err) {
                string = "Error"; 
            }
            inputField.value = string;
        } else if (buttonText === "AC") {
            string = "";
            inputField.value = string;
        } else if (buttonText === "Del") {
            string = string.slice(0, string.length - 1);
            inputField.value = string;
        } else {
            string += buttonText;
            inputField.value = string;
        }
    });
});

