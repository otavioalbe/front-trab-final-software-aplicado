function carregarReembolsos(){
            fetch('http://localhost:8080/reembolso/buscar?size=100') //+ $('#page').val())
            .then(response => response.json())
            .then(reembolsos => {
                //console.log(reembolsos)
                data = reembolsos.content
                var lista = document.querySelector('#repos')
                for(i in data){
                    //console.log(data[i])
                    var objeto = document.createElement('li')
                    objeto.innerHTML = JSON.stringify(
                        "<strong>Reembolso "+reembolsos.content[i].id +"</strong>")+ 
                        "<br>Descrição: " + reembolsos.content[i].descricao + 
                        "<br> - Valor: " + reembolsos.content[i].valor +
                        "<br> - Data de solicitação: " + reembolsos.content[i].dataSolicitacao +
                        "<br> - Tipo: " + reembolsos.content[i].tipo +
                        "<br> - Funcionario: " + reembolsos.content[i].funcionario + 
                        "<br> - Status: " + reembolsos.content[i].status+
                        "<br> - Motivo: "+ reembolsos.content[i].motivoRecusa + "<br><br>"
                lista.appendChild(objeto)
            }
        }).catch(error => console.log(error))
    }
carregarReembolsos()