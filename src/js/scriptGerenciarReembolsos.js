function carregarReembolsos(){
            fetch('http://localhost:8080/reembolso/buscar')
            .then(response => response.json())
            .then(reembolsos => {
                //console.log(reembolsos.content)
            var lista = document.querySelector('#repos')
                for(i in reembolsos.content){
                    //console.log(reembolsos[i])
                    var elemento = document.createElement('li')
                    elemento.innerHTML = JSON.stringify(reembolsos.content[i])
                    //console.log(elemento)
                    lista.appendChild(elemento)
                }
        }
        ).catch(error => console.log(error))
}

carregarReembolsos()