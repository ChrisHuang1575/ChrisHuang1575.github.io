// open and close pop-up form
function openForm() {
    document.getElementById("my-form").style.display = "block";
}
  
function closeForm() {
    document.getElementById("my-form").style.display = "none";
}

// dynamically add and delete input tags
function addInput(){
    removeInput();
    let inputBox = document.getElementById("hourly-rate");
    let hourInput = document.createElement("input");
    hourInput.setAttribute("type","text");
    hourInput.setAttribute("placeholder","Hourly rate")
    hourInput.setAttribute("required","");
    hourInput.setAttribute("id","rate-input")
    inputBox.appendChild(hourInput);
    
}
function removeInput(){
    let inputBox = document.getElementById("hourly-rate");
    while (inputBox.firstChild){
        inputBox.removeChild(inputBox.firstChild);
    }
}

//number checker
function numCheck(){
    let inputNum = document.getElementById("rate-input");
    let value = inputNum.value;
    var regex=/^\d+(\.\d+)?$/;
    if (!value.match(regex)) {
        alert("Hourly rates shall be a number.");
        return false;
    }
}