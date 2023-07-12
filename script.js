const hulk = document.querySelector(".hulk");
const homemFerro = document.querySelector(".homemFerro");
const imagem = document.getElementById("gif-img");
const doutorEstranho = document.querySelector(".doutorEstranho");
const sheHulk = document.querySelector(".sheHulk");
const capitaoAmerica = document.querySelector(".capitaoMarvel");
const homemAranha = document.querySelector(".homemAranha");
const motoqueiroFantasma = document.querySelector(".motoqueiroFantasma");
const capitaoMarvel = document.querySelector(".capitaoMarvel");
const thor = document.querySelector(".thor");
const demolidor = document.querySelector(".demolidor");
const text = document.querySelector("#text");
const heroImage = document.querySelector(".heroImage");

homemAranha.addEventListener("click", function () {
  imagem.src = "assets/HeroisFoto/Homem-Aranha.gif";
});

hulk.addEventListener("click", function () {
  imagem.src = "assets/HeroisFoto/HulkGif.png";
});

homemFerro.addEventListener("click", function () {
  imagem.src = "assets/HeroisFoto/Homem-Ferro.gif ";
});
doutorEstranho.addEventListener("click", function () {
  imagem.src = "assets/HeroisFoto/Doutor-Estranho.gif ";
});
capitaoAmerica.addEventListener("click", function () {
  imagem.src = "assets/HeroisFoto/Capitao-America.gif ";
});
motoqueiroFantasma.addEventListener("click", function () {
  imagem.src = "assets/HeroisFoto/Motoqueiro-Fantasma.gif";
});
sheHulk.addEventListener("click", function () {
  imagem.src = "assets/HeroisFoto/She-Hulk.png";
});

capitaoMarvel.addEventListener("click", function () {
  imagem.src = "assets/HeroisFoto/capitaMarvel.png";
});
thor.addEventListener("click", function () {
  imagem.src = "assets/HeroisFoto/Thor.png";
});
demolidor.addEventListener("click", function () {
  imagem.src = "assets/HeroisFoto/Demolidor.png";
});

function mudarCor() {
  const cores = [
    "rgb(0, 1, 255)", // Azul intenso
    "rgb(0, 1, 240)", // Azul mais escuro
  ];

  var elemento = document.getElementById("text");

 function  ola() {
    var corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    elemento.style.color = corAleatoria;
  }
}

// Chamar a função mudarCor
mudarCor();
