// JS calculator application based on 4 values that will be used for simple calculation operations: +, -, /, *
// store of previous value from entry area
let prevVal = "";
// store new value that will be put after operation is selected
let newVal = "";
// store math operator
let mathOperator = "";
// store the result of calculation
let resultVal = "";
// error handling: track how many times user clicked on decimal and not allow for more than one click
let decimalClicked = false;
// memory stored value
let valMemStored = "";

// function for reading the number button pressed
function numButPress(num){
    // check if result value has somethign stored
    if(resultVal){
        // if there is value, set new value and reset result
        newVal = num;
        resultVal = "";
    } else{
        // if resutl value does not have a value, '===' check if the same value and type
        if(num === '.'){
            // if decimal was clicked only once in setting up entry value
            if(decimalClicked != true){
                // add the decimal part of the value
                newVal += num;
                // set the flag for decimal clicked
                decimalClicked = true;
            }
        } else{
            newVal += num;
        }
    }
    // update entry with new value
    document.getElementById("entry").value = newVal;
}

// function for reading the math operator button pressed
function mathButPress(operator){

}

// function for reading the equal button pressed
function equalButPress(num){

}

// function for clearing data from input area
function clearButPress(){
    // reset all of the variables
    prevVal = "";
    newVal = "";
    resultVal = "";
    mathOperator = "";
    decimalClicked = false;
    // set entry to "0"
    document.getElementById("entry").value = "0";
}

// function for copying number to memory
function copyButPress(num){
    // store the entered value in variable
    valMemStored = document.getElementById("entry").value;
}

// function to paste the number in memory
function pasteButPress(num){
    // if there is a value stored in memory
    if(valMemStored){
        // paste the stored value to entry space
        document.getElementById("entry").value = valMemStored;
        // set new value as the one stored
        newVal = valMemStored;
    }
}