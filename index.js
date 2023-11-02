const input = document.getElementById("phone-input");
let lastValue = ""
input.addEventListener("input", (e) => {
    if (e.target.value.length > 11) {
        input.value = lastValue;
        return;
    }
    input.value = e.target.value;
    lastValue = e.target.value
})