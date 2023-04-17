const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter")

//Reatract the wrtiting in text secetion
textareaEl.addEventListener("keyup", () => {
    updateCounter()

});

updateCounter()

function updateCounter(){
   totalCounterEl.innerText = textareaEl.value.length;
   
   remainingCounterEl.innerText =  textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}