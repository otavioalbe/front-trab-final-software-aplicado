function carregarReembolsosPENDING(){
            fetch('http://localhost:8080/reembolso/buscar?size=100') //+ $('#page').val())
            .then(response => response.json())
            .then(reembolsos => {
                //console.log(reembolsos)
                data = reembolsos.content
                var lista = document.querySelector('#repos')
                for(i in data){
                    console.log(data[i])
                    var objeto = document.createElement('li')
                    if(reembolsos.content[i].status == 'PENDING'){
                    objeto.innerHTML = JSON.stringify(
                        "<strong>Reembolso "+reembolsos.content[i].id +"</strong>")+ 
                        "<br>Descrição: " + reembolsos.content[i].descricao + 
                        "<br> - Valor: " + reembolsos.content[i].valor + " reais" +
                        "<br> - ID do funcionário: " + reembolsos.content[i].funcionarioId +
                        "<br> - Data de solicitação: " + reembolsos.content[i].dataSolicitacao +
                        "<br> - Data de resposta: " + reembolsos.content[i].dataResposta +
                        "<br> - Status: " + reembolsos.content[i].status +
                        "<br> - Motivo: "+ reembolsos.content[i].motivoRecusa + "<br><br><hr><br>"
                lista.appendChild(objeto)
            }
            }
        }).catch(error => console.log(error))
    }
carregarReembolsosPENDING()

let botao = document.getElementById('btnRegistrar')

botao.addEventListener('click', function registraReembolso() {
    console.log("Atualizando reembolso")
    let pegaID = document.getElementById('IDreembolso').value
    let pegaMotivo = document.getElementById('motivoReembolso').value
    let inputsAprovacao = document.querySelectorAll('input[name="aprovar"]');
    let pegaAprovado = '';

    inputsAprovacao.forEach(function(input) {
    if (input.checked) {
        pegaAprovado = input.value;
    }
    });
    if(pegaAprovado == 'REJECTED'){
        if(pegaID.trim() == '' || pegaMotivo.trim() == '' || pegaAprovado.trim() == ''){
            alert('Preencha todos os campos!')
            return
        }
    }else{
        if(pegaID.trim() == '' || pegaAprovado.trim() == ''){
            alert('Preencha todos os campos!')
            return
        }
    }
    if(!(isNumber(pegaID))){
        alert("O ID digitado deve ser apenas números!")
        return;
    }
    
    if(pegaAprovado == 'ACCEPTED'){
        fetch ('http://localhost:8080/reembolso/aprovar/'+pegaID, {
            method: 'PUT',
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
        }).then(function (res) { console.log(res)} )
        .catch(function (res) { console.log(res)} )
        
    } else if(pegaAprovado == 'REJECTED'){
        fetch ('http://localhost:8080/reembolso/cancelar/'+pegaID, {
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            method: 'PUT',
            body: JSON.stringify(
                pegaMotivo
            )
        }).then(function (res) { console.log(res)} )
        .catch(function (res) { console.log(res)} )
        
    }
    alert("Reembolso atualizado com sucesso!");
    window.location.reload();
})

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};