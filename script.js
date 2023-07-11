const hulk = document.querySelector(".hulk");
const homemFerro = document.querySelector(".homemFerro");
const imagem = document.getElementById("gif-img");
const doutorEstranho = document.querySelector(".doutorEstranho")
const sheHulk = document.querySelector(".sheHulk")
const capitaoAmerica = document.querySelector(".capitaoAmerica")
const homemAranha = document.querySelector(".homemAranha");
const motoqueiroFantasma = document.querySelector(".motoqueiroFantasma")
const capitaoMarvel = document.querySelector(".capitaoMarvel")


homemAranha.addEventListener("click", function() {
  imagem.src = 'assets/HeroisFoto/Homem-Aranha.gif';
});

hulk.addEventListener("click", function() {
  imagem.src = 'assets/HeroisFoto/HulkGif.png';
});

homemFerro.addEventListener("click", function(){
  imagem.src = 'assets/HeroisFoto/Homem-Ferro.gif ';

}
)
doutorEstranho.addEventListener("click", function(){
  imagem.src = 'assets/HeroisFoto/Doutor-Estranho.gif ';

}
)
capitaoAmerica.addEventListener("click", function(){
  imagem.src = 'assets/HeroisFoto/Capitao-America.gif ';

})
motoqueiroFantasma.addEventListener("click", function(){
  imagem.src = 'assets/HeroisFoto/Motoqueiro-Fantasma.gif';

})
sheHulk.addEventListener("click", function(){
  imagem.src = 'assets/HeroisFoto/She-Hulk.png';
})

capitaoMarvel.addEventListener("click", function(){
  imagem.src = 'assets/HeroisFoto/capitaoMarvel.png';
})