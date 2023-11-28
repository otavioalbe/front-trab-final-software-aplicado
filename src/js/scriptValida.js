const gerentes = [
    {
        id: 999,
        login: 'admin',
        senha: 'admin'
    },
    {
        id: 998,
        login: 'otavio',
        senha: 'otavio'
    },
    {
        id: 997,
        login: 'rodrigo',
        senha: 'rodrigo'
    },
    {
        id: 996,
        login: 'arthur',
        senha: 'arthur'
    }
]

const funcionarios = [
    {
        id: 1,
        login: 'michael',
        senha: 'michael'
    },
    {
        id: 2,
        login: 'jose',
        senha: 'jose'
    },
    {
        id: 3,
        login: 'maria',
        senha: 'maria'
    },
    {
        id: 111,
        login: 'joao',
        senha: 'joao'
    }
]

let botao = document.getElementById('btnLogar')

botao.addEventListener('click', function Login() {
    let pegaUsuario = document.getElementById('usuario').value
    let pegaSenha = document.getElementById('senha').value
    let validaLoginGerente = false
    let validaLoginFuncionario = false


    for(let i in gerentes){
        if(pegaUsuario == gerentes[i].login && pegaSenha == gerentes[i].senha){
            validaLoginGerente = true
            break;
        }
    }
    for(let i in funcionarios){
        if(pegaUsuario == funcionarios[i].login && pegaSenha == funcionarios[i].senha){
            validaLoginFuncionario = true
            break;
        }
    }

    if(validaLoginGerente == true){
        location.href = 'gerente.html'
        //alert('Login de gerente realizado com sucesso!')
    }else if(validaLoginFuncionario == true){
        location.href = 'funcionario.html'
        //alert('Login de funcionário realizado com sucesso!')
    }else{
        alert('Usuário ou senha incorretos!')
    }

})
