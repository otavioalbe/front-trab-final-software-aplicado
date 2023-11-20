const formulario = document.querySelector("form");
const Idescricao = document.querySelector(".descricao");
const Ivalor = document.querySelector(".valor");
const IdataSolicitacao = document.querySelector(".dataSolicitacao");

function cadastrar(){
    fetch("http://localhost:8080/reembolso/solicitar",{
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        method: "POST",
        body: JSON.stringify({
            descricao: Idescricao.value,
            valor: Ivalor.value,
            dataSolicitacao: IdataSolicitacao.value,
            dataResposta: null,
            status: "PENDING"
        })
    }).then(function (res) { console.log(res)} )
    .catch(function (res) { console.log(res)} )
};

function limpar(){
    Idescricao.value = "";
    Ivalor.value = "";
    IdataSolicitacao.value = "";
};

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    cadastrar();
    limpar();
});