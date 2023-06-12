function criaCalculadora() {
    return {
        display: document.querySelector('.display')

        inicia() {
           this.botaoClicado() 
        }

        botaoClicado() {
            document.addEventListener('click', e => {
                let elemento = e.target
            })
        }
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()