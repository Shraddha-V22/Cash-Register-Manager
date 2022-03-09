const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMsg = document.querySelector("#error-msg");

function hideErrorMsg() {
    errorMsg.style.display = "none";
}

function checkEventHandler() {
    hideErrorMsg();

    if(billAmount.value > 0) {
        if(cashGiven.value >= billAmount.value) {} else {
            msgError("The cash given amount should be greater than or equal to the bill amount!")
        };
    } else {
        msgError("The bill amount should be greater than zero!")
    };
    
}

checkButton.addEventListener("click", checkEventHandler);

function msgError(message) {
    errorMsg.style.display = "block";
    errorMsg.innerText = message;
}
