const formulario = document.querySelector("form");
const Idescricao = document.querySelector(".descricao");
const Ivalor = document.querySelector(".valor");

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
            funcionario_id: 99,
        })
    }).then(function (res) { console.log(res)} )
    .catch(function (res) { console.log(res)} )
};

function limpar(){
    Idescricao.value = "";
    Ivalor.value = "";
};

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    cadastrar();
    limpar();
});