let campos = document.querySelectorAll('.input-area input, textarea');
let areaAviso = document.querySelector('#avisos');

let avisoValido = {
    nome: {descricao: 'Informe um nome valido', ativado: false,},
    email: {descricao: 'Informe um e-mail valido', ativado: false,},
    endereco: {descricao: 'Informe um endereço valido', ativado: false,},
    mensagem: {descricao: 'Informe um mensagem valido', ativado: false,}
};


const regrasValidacao = {
    name: (inputNome) => {
       if (inputNome.value.length < 4) {
            inputNome.classList.add("invalid");
            avisoValido.nome.ativado = true;
            avisos(avisoValido);
           
       } else {
            inputNome.classList.remove("invalid");
            avisoValido.nome.ativado = false;
            avisos(avisoValido);
       }
    },

    email: (inputEmail) => {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(regex.test(inputEmail.value)) {
            inputEmail.classList.remove("invalid");
            avisoValido.email.ativado = false;
            avisos(avisoValido);
        } else {
            inputEmail.classList.add("invalid");
            avisoValido.email.ativado = true;
            avisos(avisoValido);
        }
    },

    endereco: (inputEndereco) => {
        if (inputEndereco.value.length < 10) {
            inputEndereco.classList.add("invalid");
            avisoValido.endereco.ativado = true;
            avisos(avisoValido);
        } else {
            inputEndereco.classList.remove("invalid");
            avisoValido.endereco.ativado = false;
            avisos(avisoValido);
        }
    },

    mensagem: (inputMensagem) => {
        if (inputMensagem.value.length < 10) {
            inputMensagem.classList.add("invalid");
            avisoValido.mensagem.ativado = true;
            avisos(avisoValido);
        } else {
            inputMensagem.classList.remove("invalid");
            avisoValido.mensagem.ativado = false;
            avisos(avisoValido);
        }
    }
}


const validarForm = (event) => {
    //Serve para capturar o valor dos campos
    event.preventDefault();

   // let maximoAviso = campos.length;
    
    campos.forEach((item)=> {
        areaAviso.innerHTML = 'Carregando...'
        loadAviso(item)
    });

}


const avisos = (aviso) => {
    //Renderização do html
    let htmlAviso = "<ul>";
    htmlAviso += "</ul>"
    const avisosValidados = Object.values(aviso);
    
    for (const valor of avisosValidados) {
        if(valor.ativado) {
            htmlAviso += `<li style="color:red">${valor.descricao}</li>`;
        }
    }
    areaAviso.innerHTML = htmlAviso;
}

const loadAviso = (item) => {
    console.log(item.id)
    setTimeout(() => {
        if(item.id === 'nome') {
            regrasValidacao.name(item);
        }
        if(item.id === 'email') {
            regrasValidacao.email(item);
        }

        if(item.id === 'endereco') {
            regrasValidacao.endereco(item);
        }

        if(item.id === 'mensagem') {
            regrasValidacao.mensagem(item);
        }
        
    },3000)
};








