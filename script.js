const hulk = document.querySelector(".hulk");
const homemFerro = document.querySelector(".homemFerro");
const imagem = document.getElementById("gif-img");
const doutorEstranho = document.querySelector(".doutorEstranho");
const sheHulk = document.querySelector(".sheHulk");
const capitaoAmerica = document.querySelector(".capitaoAmerica");
const homemAranha = document.querySelector(".homemAranha");
const motoqueiroFantasma = document.querySelector(".motoqueiroFantasma");
const capitaoMarvel = document.querySelector(".capitaoMarvel");
const thor = document.querySelector(".thor");
const demolidor = document.querySelector(".demolidor");
const text = document.querySelector("#text");
const heroImage = document.querySelector(".heroImage");
const info = document.querySelector("#info");
const buttons = document.querySelectorAll(".heroButton");
const heroButton = document.querySelectorAll(".heroButton");

function removeStyles() {
  imgHomemAranha.style.transform = "";
  imgHomemAranha.style.boxShadow = "";
  imgHulk.style.transform = "";
  imgHulk.style.boxShadow = "";
  imgHomemFerro.style.transform = "";
  imgHomemFerro.style.boxShadow = "";
  imgDoutorEstranho.style.transform = "";
  imgDoutorEstranho.style.boxShadow = "";
  imgCapitaoAmerica.style.transform = "";
  imgCapitaoAmerica.style.boxShadow = "";
  imgMotoqueiroFantasma.style.transform = "";
  imgMotoqueiroFantasma.style.boxShadow = "";
  imgSheHulk.style.transform = "";
  imgSheHulk.style.boxShadow = "";
  imgCapitaoMarvel.style.transform = "";
  imgCapitaoMarvel.style.boxShadow = "";
  imgThor.style.transform = "";
  imgThor.style.boxShadow = "";
  imgDemolidor.style.transform = "";
  imgDemolidor.style.boxShadow = "";
}

const imgCapitaoAmerica = document.getElementById("imgCapitaoAmerica");
const imgDoutorEstranho = document.getElementById("imgDoutorEstranho");
const imgHomemFerro = document.getElementById("imgHomemFerro");
const imgHomemAranha = document.getElementById("imgHomemAranha");
const imgHulk = document.getElementById("imgHulk");
const imgMotoqueiroFantasma = document.getElementById("imgMotoqueiroFantasma");
const imgSheHulk = document.getElementById("imgSheHulk");
const imgCapitaoMarvel = document.getElementById("imgCapitaoMarvel");
const imgThor = document.getElementById("imgThor");
const imgDemolidor = document.getElementById("imgDemolidor");
let linha = document.getElementById("linha1");

homemAranha.addEventListener("click", function () {
  info.textContent =
    "O Homem-Aranha, também conhecido como Peter Parker, possui força proporcional à de uma aranha. Ele é capaz de levantar cerca de 10 toneladas e possui reflexos incrivelmente rápidos.";
  imagem.src = "assets/HeroisFoto/Homem-Aranha.gif";
});

hulk.addEventListener("click", function () {
  info.textContent =
    "O Hulk é conhecido por sua força descomunal. Quando Bruce Banner se transforma em Hulk, ele ganha uma força sobre-humana praticamente ilimitada, sendo capaz de levantar montanhas e causar destruição massiva.";
  imagem.src = "assets/HeroisFoto/Hulk.png";
});

homemFerro.addEventListener("click", function () {
  info.textContent =
    "O Homem de Ferro, também conhecido como Tony Stark, é um gênio inventor que usa uma armadura avançada. A armadura do Homem de Ferro aumenta sua força física para níveis sobre-humanos, permitindo-lhe levantar várias toneladas.";
  imagem.src = "assets/HeroisFoto/Homem-Ferro.png";
});

doutorEstranho.addEventListener("click", function () {
  info.textContent =
    "O Doutor Estranho é um feiticeiro mestre das artes místicas. Embora sua força física não seja sobre-humana, ele compensa isso com habilidades mágicas poderosas, permitindo-lhe manipular a realidade e lançar feitiços destrutivos.";
  imagem.src = "assets/HeroisFoto/Doutor-Estranho.png";
});

capitaoAmerica.addEventListener("click", function () {
  info.textContent =
    "O Capitão América é um super soldado com força sobre-humana. Ele possui força física excepcional, permitindo-lhe levantar até 800 libras (362 quilos) e combater adversários poderosos.";
  imagem.src = "assets/HeroisFoto/Capita-America.png";
});

motoqueiroFantasma.addEventListener("click", function () {
  info.textContent =
    "O Motoqueiro Fantasma, também conhecido como Johnny Blaze, é um anti-herói demoníaco. Ele possui uma força sobre-humana que varia de acordo com sua ligação com o demônio Zarathos, permitindo-lhe levantar cargas pesadas e derrotar inimigos poderosos.";
  imagem.src = "assets/HeroisFoto/Motoqueiro-Fantasma.gif";
});

sheHulk.addEventListener("click", function () {
  info.textContent =
    "A She-Hulk, também conhecida como Jennifer Walters, é uma versão feminina do Hulk. Ela possui uma força sobre-humana semelhante à do Hulk, permitindo-lhe levantar várias toneladas e combater adversários formidáveis.";
  imagem.src = "assets/HeroisFoto/She-Hulk.png";
});

capitaoMarvel.addEventListener("click", function () {
  info.textContent =
    "A Capitã Marvel, também conhecida como Carol Danvers, possui poderes cósmicos que lhe concedem força sobre-humana. Ela é uma das heroínas mais poderosas do universo Marvel e é capaz de enfrentar ameaças cósmicas de grande escala.";
  imagem.src = "assets/HeroisFoto/capitaMarvel.png";
});

thor.addEventListener("click", function () {
  info.textContent =
    "Thor é o deus do trovão e possui uma força sobre-humana incrível. Ele é capaz de levantar seu martelo, o Mjolnir, que é extremamente pesado e só pode ser manejado por aqueles que são dignos.";
  imagem.src = "assets/HeroisFoto/Thor.png";
});

demolidor.addEventListener("click", function () {
  info.textContent =
    "O Demolidor, também conhecido como Matt Murdock, é um super-herói cego que possui sentidos aprimorados. Embora sua força física não seja sobre-humana, ele é um combatente habilidoso e possui agilidade e reflexos excepcionais.";
  imagem.src = "assets/HeroisFoto/Demolidor.png";
});

document.addEventListener("click", function (e) {
  let el = e.target;
  if (el.classList.contains("heroImage")) {
    removeStyles();
    el.style.transform = "scale(1.1)";
    el.style.boxShadow = "0 0 10  px #ccc";
    imagem.style.opacity = "1";
    console.log(el);
  }
});

function exibirLinha() {
  if (imagem.src !== "#") {
    linha.style.display = "flex";
  }
}
