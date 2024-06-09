let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");

let darkModeKey = "darkModePreference";
let darkMode = localStorage.getItem(darkModeKey) === "true";
let isFirstLoad = true;

function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.classList.toggle("dark-mode", darkMode);
    updateContainersDisplay();
    // Additional logic or styles for toggling dark mode can be added here
    localStorage.setItem(darkModeKey, darkMode.toString());
}

function updateContainersDisplay() {
    if (darkMode) {
        aContainer.style.display = "none";
        bContainer.style.display = "block";
    } else {
        aContainer.style.display = "block";
        bContainer.style.display = "none";
    }
}

let getButtons = (e) => e.preventDefault();

let changeForm = (e) => {
    switchCtn.classList.add("is-gx");
    setTimeout(function () {
        switchCtn.classList.remove("is-gx");
    }, 1500);

    if (isFirstLoad) {
        updateContainersDisplay();
        isFirstLoad = false;
    }

    switchCtn.classList.toggle("is-gx");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");

    setTimeout(function () {
        switchC1.classList.toggle("is-hidden");
        switchC2.classList.toggle("is-hidden");
        aContainer.classList.toggle("is-z200");
        bContainer.classList.toggle("is-z200");

        if (aContainer.classList.contains("is-z200")) {
            aContainer.style.display = "none";
            bContainer.style.display = "block";
        } else {
            aContainer.style.display = "block";
            bContainer.style.display = "none";
        }
    }, 10);
};

let mainF = (e) => {
    updateContainersDisplay();
    for (var i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener("click", getButtons);
    for (var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm);
};

window.addEventListener("load", mainF);
