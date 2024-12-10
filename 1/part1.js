// 1.1

document.title="Тағанхожаев Дамир";

// 1.2

const element = document.getElementById("header");

 element.querySelector("h1").textContent = "Изучение JavaScript";

 // 1.3
 
const menu = document.querySelectorAll(".menu-link");

menu.forEach(element => {
    console.log(element.textContent);
});

// 1.4

const featuresList = document.querySelectorAll(".features-list");


if (featuresList.length > 0) {
    const listItems = featuresList[0].querySelectorAll("li"); 

    if (listItems.length > 1) {
        listItems[1].innerHTML = 'Поддержка <strong>API</strong>';
    }
}

