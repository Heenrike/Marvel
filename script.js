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

homemAranha.addEventListener("click", function () {
  imagem.src = "assets/HeroisFoto/Homem-Aranha.gif";
  info.textContent =
    "O Homem-Aranha, também conhecido como Peter Parker, possui força proporcional à de uma aranha. Ele é capaz de levantar cerca de 10 toneladas e possui reflexos incrivelmente rápidos.";
});

hulk.addEventListener("click", function () {
  imagem.src = "assets/HeroisFoto/Hulk.png";
  info.textContent =
    "O Hulk é conhecido por sua força descomunal. Quando Bruce Banner se transforma em Hulk, ele ganha uma força sobre-humana praticamente ilimitada, sendo capaz de levantar montanhas e causar destruição massiva.";
});

homemFerro.addEventListener("click", function () {
  imagem.src = "assets/HeroisFoto/Homem-Ferro.png ";
  info.textContent =
    "O Homem de Ferro, também conhecido como Tony Stark, é um gênio inventor que usa uma armadura avançada. A armadura do Homem de Ferro aumenta sua força física para níveis sobre-humanos, permitindo-lhe levantar várias toneladas.";
});

doutorEstranho.addEventListener("click", function () {
  imagem.src = "assets/HeroisFoto/Doutor-Estranho.png ";
  info.textContent =
    "O Doutor Estranho é um feiticeiro mestre das artes místicas. Embora sua força física não seja sobre-humana, ele compensa isso com habilidades mágicas poderosas, permitindo-lhe manipular a realidade e lançar feitiços destrutivos.";
});

capitaoAmerica.addEventListener("click", function () {
  imagem.src = "assets/HeroisFoto/Capita-America.png";
  info.textContent =
    "O Capitão América é um super soldado com força sobre-humana. Ele possui força física excepcional, permitindo-lhe levantar até 800 libras (362 quilos) e combater adversários poderosos.";
});

motoqueiroFantasma.addEventListener("click", function () {
  imagem.src = "assets/HeroisFoto/Motoqueiro-Fantasma.gif";
  info.textContent =
    "O Motoqueiro Fantasma, também conhecido como Johnny Blaze, é um anti-herói demoníaco. Ele possui uma força sobre-humana que varia de acordo com sua ligação com o demônio Zarathos, permitindo-lhe levantar cargas pesadas e derrotar inimigos poderosos.";
});

sheHulk.addEventListener("click", function () {
  imagem.src = "assets/HeroisFoto/She-Hulk.png";
  info.textContent =
    "A She-Hulk, também conhecida como Jennifer Walters, é uma versão feminina do Hulk. Ela possui uma força sobre-humana semelhante à do Hulk, permitindo-lhe levantar várias toneladas e combater adversários formidáveis.";
});

capitaoMarvel.addEventListener("click", function () {
  imagem.src = "assets/HeroisFoto/capitaMarvel.png";
  info.textContent =
    "A Capitã Marvel, também conhecida como Carol Danvers, possui poderes cósmicos que lhe concedem força sobre-humana. Ela é uma das heroínas mais poderosas do universo Marvel e é capaz de enfrentar ameaças cósmicas de grande escala.";
});

thor.addEventListener("click", function () {
  imagem.src = "assets/HeroisFoto/Thor.png";
  info.textContent =
    "Thor é o deus do trovão e possui uma força sobre-humana incrível. Ele é capaz de levantar seu martelo, o Mjolnir, que é extremamente pesado e só pode ser manejado por aqueles que são dignos.";
});

demolidor.addEventListener("click", function () {
  imagem.src = "assets/HeroisFoto/Demolidor.png";
  info.textContent =
    "O Demolidor, também conhecido como Matt Murdock, é um super-herói cego que possui sentidos aprimorados. Embora sua força física não seja sobre-humana, ele é um combatente habilidoso e possui agilidade e reflexos excepcionais.";
});
