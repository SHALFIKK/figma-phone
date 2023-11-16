const sunLink = document.getElementById("sunLink");
const moonLink = document.getElementById("moonLink");
const body = document.body;
const lightModeClass = "light-mode";
const activeClass = 'active';
const logoSvg = document.querySelector("#logo-svg");

sunLink.addEventListener("click", () => {
    body.classList.remove(lightModeClass);
    moonLink.classList.remove(activeClass);
    sunLink.classList.add(activeClass);
    logoSvg.setAttribute("src", 'img/YUDAEV BRANDING.svg');


});

moonLink.addEventListener("click", () => {
    body.classList.add(lightModeClass);
    moonLink.classList.add(activeClass);
    sunLink.classList.remove(activeClass);
    logoSvg.setAttribute("src", 'img/udaev.svg.branding.svg');

});

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
