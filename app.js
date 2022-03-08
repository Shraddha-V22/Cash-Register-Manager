const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMsg = document.querySelector("#error-msg");

function checkEventHandler() {
    if(billAmount > 0) {

    }else {
        message
    }
}

checkButton.addEventListener("click", checkEventHandler);

function message() {
    return errorMsg.innerText= "The bill amount should be greater than zero"
}