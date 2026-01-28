
const btnAdicionar = document.getElementById("btn-adicionar");
const ajudaTotal = document.querySelector(".content #ajuda-total");
const ajudaMedia = document.querySelector(".content #ajuda-media");
const txtPessoa = document.getElementById("txtpessoa");
const txtvalor = document.getElementById("txtvalor");
const list = document.querySelector(".list");
const nome = document.getElementById("name")

var soma;

const AJUDAS = [];

function desafio(){
    let arr = Object.values(AJUDAS.valor);
    let max = Math.max(...arr);

    AJUDAS.forEach((ajuda)=>{
        if (ajuda.valor == max) {
            nome.classList = "big"
        }
    })
}


function atualizarTotal(){
    soma = 0;
    AJUDAS.forEach((ajuda)=>{
        soma += ajuda.valor;
    })
    ajudaTotal.innerHTML = `R$${soma}`;
}

function atualizarMedia(){
    soma= 0;
    AJUDAS.forEach((ajuda)=>{
        soma += ajuda.valor;
    })
    let media = soma /AJUDAS.length;
    ajudaMedia.innerHTML = `R$${media}`;
}

function removerAjuda(posicao){
    if (confirm("Deseja realmente excluir esse valor? ")) {
        AJUDAS.splice(posicao, 1);
        listarAjudas();
        atualizarTotal();
        atualizarMedia();
}}

function listarAjudas(){

    list.innerHTML = ' ' ;

    if (AJUDAS.length == 0) {
        list.innerHTML = `Nenhuma ajuda ainda 😢`;
    }

    AJUDAS.sort((e, d) => {
        return parseFloat(e.valor - d.valor);
    });
    AJUDAS.reverse();


    AJUDAS.forEach(function(ajuda, posicao){
    
        list.innerHTML +=
        `<div class="item" style="${posicao == 0 ? "border: 10px solid yellow; border-radius: 20px;" : ""}">
        <div class="item">
        <span class="name" id= "name">${ajuda.nome}</span>
                    <span class="value">(💲 ${ajuda.valor})</span>
                    <a href="javascript:removerAjuda(${posicao})">
                        <img src="img/trash.svg">
                    </a>
                </div>`
    })
}

btnAdicionar.addEventListener("click", (butao)=>{
    butao.preventDefault();

    const objAjuda = {
    nome: txtPessoa.value,
    valor: parseFloat(txtvalor.value),
    };

    AJUDAS.push(objAjuda);
    listarAjudas();
    atualizarMedia();
    atualizarTotal()

    alert(objAjuda.valor+" reais de "+objAjuda.nome+" adicionado com sucesso!");
});


listarAjudas();
atualizarTotal();
atualizarMedia();