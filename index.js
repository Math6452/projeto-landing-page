var setaDireita = window.document.getElementById("Seta-direita")
var Leonardo = window.document.getElementById("Leonardo")
var Samanthe = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaEsquerda = window.document.getElementById("Seta-esquerda")


function Direita() {
    Leonardo.style ="display:none"
    Bruna.style ="display:flex"
    setaDireita.style="display:none"
    setaEsquerda.style ="display:flex; margin-top:65px;"
}

function Esquerda() {
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    setaDireita.style ="display:flex; margin-top:55px"
    setaEsquerda.style ="display:none"
}