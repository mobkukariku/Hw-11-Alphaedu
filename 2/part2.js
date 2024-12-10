// 2.1

const info = document.getElementById("info");

const ul = document.createElement("ul");

const li1 = document.createElement("li");
li1.textContent = "Введение в DOM";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.textContent = "Создание элементов";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.textContent = "Изменение атрибутов";
ul.appendChild(li3);

info.appendChild(ul);

// 2.2

const header = document.getElementById("header");

const a = document.createElement("a");
a.href = "https://www.linkedin.com/in/damir-tagankhozhaev-7436b1309/";
a.textContent = "Ссылка на линкедин";
a.target = "_blank";
header.appendChild(a);



// 2.3

const main = document.getElementById("main");

const section = document.createElement("section");
section.classList.add("dynamic");

const h2 = document.createElement("h2");
h2.textContent = "Обучение JavaScript";

const p = document.createElement("p");
p.textContent = "Динамическое создание элементов позволяет улучшить интерфейс пользователя";

main.appendChild(section);

section.appendChild(h2);
section.appendChild(p);

// 2.4

info.removeChild(ul);

// 2.5


const footer = document.getElementById("footer");

footer.remove();