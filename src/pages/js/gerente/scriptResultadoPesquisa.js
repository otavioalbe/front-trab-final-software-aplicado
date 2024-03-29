const pegaDataInicio = localStorage.getItem('dataInicio')
const pegaDataFim = localStorage.getItem('dataFim')

buscarPeriodoReembolso()

function buscarPeriodoReembolso() {
    console.log("Pesquisando reembolsos")
    console.log(pegaDataFim)
    console.log(pegaDataInicio)
    
    fetch('http://localhost:8080/reembolso/buscar-por-periodo?dataInicio='+pegaDataInicio+'&dataFim='+pegaDataFim)
    .then(response => response.json())
    .then(reembolsos => {
        //console.log(reembolsos)
        data = reembolsos.content
        var lista = document.querySelector('#repos2')
        for(i in data){
            console.log(data[i])
            var objeto = document.createElement('li')
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
        if(lista.innerHTML == ''){
            lista.innerHTML = "Nenhum reembolso encontrado!"
        }
    })
    .catch(error => console.log(error))}
