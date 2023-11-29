function carregarReembolsos(){
    fetch('http://localhost:8080/reembolso/buscar?size=100')
    .then(response => response.json())
    .then(reembolsos => {
        //console.log(reembolsos)
        data = reembolsos.content
        var lista = document.querySelector('#repos')
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
}).catch(error => console.log(error))
}
carregarReembolsos()

let botao = document.getElementById('btnPesquisar')

botao.addEventListener('click', function registraPesquisa() {
    let pegaDataInicio = document.getElementById('dataInicio').value
    let pegaDataFim = document.getElementById('dataFim').value
    if(pegaDataInicio.trim() == '' || pegaDataFim.trim() == ''){
        alert("Preencha todos os campos!")
        return
    }
    if(pegaDataInicio > pegaDataFim){
        alert("Data inicial maior que a data final!")
        return
    }
    localStorage.setItem('dataInicio', pegaDataInicio);
    localStorage.setItem('dataFim', pegaDataFim);
    console.log(pegaDataInicio)
    console.log(pegaDataFim)

    //alert("Pesquisa realizada com sucesso!")
    window.location.href = 'resultadoPesquisa.html'
})