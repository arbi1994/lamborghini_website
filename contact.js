/* Form  */
const submitBtn = document.querySelector("#submit");
const input = document.querySelectorAll("input");
const textArea = document.querySelector("textarea");

submitBtn.addEventListener("mousedown", onMouseDown);
submitBtn.addEventListener("mouseup", onMouseUp);
submitBtn.addEventListener("mouseover", onMouseHover);
submitBtn.addEventListener("mouseout", onMouseOut);

input.forEach(input => {
    input.addEventListener("mousedown", () => input.style.background = "#0000002c");
    input.addEventListener("mouseup", () => input.style.background = "#00000010");
    input.addEventListener("mouseout", () => input.style.background = "white");
})

textArea.addEventListener("mousedown", () => textArea.style.background = "#0000002c");
textArea.addEventListener("mouseup", () => textArea.style.background = "#00000010");
textArea.addEventListener("mouseout", () => textArea.style.background = "white");

function onMouseDown(){
    submitBtn.style.background = "#0000002c";
}
function onMouseUp(){
    submitBtn.style.background = "#00000010";
}
function onMouseHover(){
    submitBtn.style.background = "#00000010";
}
function onMouseOut(){
    submitBtn.style.background = "#0000002c";
}


