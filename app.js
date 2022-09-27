const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMsg = document.querySelector("#error-msg");
const changeTable = document.querySelectorAll(".change-table");

const notesAvailable = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", checkEventHandler);

for(let i=0; i<notesAvailable.length; i++) {
    changeTable[i].innerText = 0;
}

function checkEventHandler() {

    hideErrorMsg();

    if(billAmount.value && cashGiven.value) {
        validateAndCalculate(billAmount.value, cashGiven.value)
    }
    else {
        msgError("Do not leave the above fields empty!")
    }
    
}

function validateAndCalculate(billAmt, cashAmt) {
    
    if(billAmt > 0) {
        if(Number(cashAmt) >= Number(billAmt)) {
            const changeToBeReturned = cashAmt - billAmt;
            calculateChange(changeToBeReturned);

        } else {
            msgError("The cash given amount should be greater than or equal to the bill amount!")
        };
    } else {
        msgError("The bill amount should be greater than zero!")
    };
}


function calculateChange(changeToBeReturned) {
    
    for(var i=0; i < notesAvailable.length; i++) {
        const noOfNotes = Math.trunc(changeToBeReturned/notesAvailable[i]);

        changeToBeReturned = changeToBeReturned % notesAvailable[i];

        changeTable[i].innerText = noOfNotes;
    }
}


function hideErrorMsg() {
    errorMsg.style.display = "none";
}

function msgError(message) {
    errorMsg.style.display = "block";
    errorMsg.innerText = message;
}
