const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMsg = document.querySelector("#error-msg");
const changeTable = document.querySelectorAll(".change-table");

const notesAvailable = [2000, 500, 100, 20, 10, 5, 1];

function hideErrorMsg() {
    errorMsg.style.display = "none";
}

function checkEventHandler() {
    hideErrorMsg();

    if(billAmount.value > 0) {
        if(Number(cashGiven.value) >= Number(billAmount.value)) {
            const changeToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(changeToBeReturned);

        } else {
            msgError("The cash given amount should be greater than or equal to the bill amount!")
        };
    } else {
        msgError("The bill amount should be greater than zero!")
    };
    
}

checkButton.addEventListener("click", checkEventHandler);

function calculateChange(changeToBeReturned) {
    
    for(var i=0; i < notesAvailable.length; i++) {
        const noOfNotes = Math.trunc(changeToBeReturned/notesAvailable[i]);

        changeToBeReturned = changeToBeReturned % notesAvailable[i];

        changeTable[i].innerText = noOfNotes;
    }
}



function msgError(message) {
    errorMsg.style.display = "block";
    errorMsg.innerText = message;
}
