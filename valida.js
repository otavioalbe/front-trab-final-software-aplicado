const usuarios = [
    {
        login: 'admin',
        senha: 'admin'
    },
    {
        login: 'otavio',
        senha: 'otavio'
    },
    {
        login: 'rodrigo',
        senha: 'rodrigo'
    },
    {
        login: 'arthur',
        senha: 'arthur'
    }
]

let botao = document.getElementById('btnLogar')

botao.addEventListener('click', function Login() {
    let pegaUsuario = document.getElementById('usuario').value
    let pegaSenha = document.getElementById('senha').value
    let validaLogin = false


    for(let i in usuarios){
        if(pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].senha){
            validaLogin = true
            break;
        }
    }

    if(validaLogin == true){
        location.href = 'gerente.html'
        //alert('Login de gerente realizado com sucesso!')
    }else{
        location.href = 'cadastro.html'
        //alert('Login de funcionário realizado com sucesso!')
    }

})