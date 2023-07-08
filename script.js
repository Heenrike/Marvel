const homemAranha = document.querySelector(".homemAranha");
const hulk = document.querySelector(".hulk");
const homemFerro = document.querySelector(".homemFerro");
const imagem = document.getElementById("gif-img");
const doutorEstranho = document.querySelector(".doutorEstranho")
const capitaoAmerica = document.querySelector(".capitaoAmerica")
const motoqueiroFantasma = document.querySelector(".motoqueiroFantasma")


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