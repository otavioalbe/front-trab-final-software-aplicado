const formulario = document.querySelector("form");
const Idescricao = document.getElementsByName("descricao")[0];
const Ivalor = document.getElementsByName("valor")[0];

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
            funcionarioId: localStorage.getItem('idFuncionario'),
        })
    }).then(function (res) { console.log(res)} )
    .catch(function (res) { console.log(res)} )
};

function limpar(){
    Idescricao.value = "";
    Ivalor.value = "";
};
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    if(!(isNumber(Ivalor.value))){
        alert("O valor digitado deve ser apenas números!")
        return;
    }
    cadastrar();
    alert("Reembolso cadastrado com sucesso!");
    limpar();
});
