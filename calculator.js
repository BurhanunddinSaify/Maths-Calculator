const getHistory = () => document.querySelector("#history-value").innerText;

const printHistory = (num) => document.querySelector("#history-value").innerText = num;

const getOutput = () => document.querySelector("#output-value").innerText;

const printOutput = (num) => {
    if (num == "") {
        document.querySelector("#output-value").innerText = num;
    } else {
        document.querySelector("#output-value").innerText = formattedNumber(num);
    }
}
const formattedNumber = (num) => {
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value
}
const reverseFormattedNumber = (num) => Number(num.replace(/,/g, ''));

const operators = document.getElementsByClassName("operator");
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function() {
        if (this.id == "clear") {
            printHistory("");
            printOutput("");
        } else if (this.id == "backspace") {
            var
                output = reverseFormattedNumber(getOutput()).toString();
            if (output) {
                output = output.substr(0, output.length - 1);
                printOutput(output)
            }
        } else {
            var history = getHistory();
            var output = getOutput();
            if (output != "") {
                output = reverseFormattedNumber(output);
                history = history + output;
                if (this.id == "=") {
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                } else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    })
}

const numbers = document.getElementsByClassName("number");
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function() {
        var output = reverseFormattedNumber(getOutput());
        if (output != NaN) {
            output = output + this.id;
            printOutput(output);
        }
    })
}