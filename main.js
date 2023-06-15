function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
           this.botaoClicado() 
        },

        botaoClicado() {
            document.addEventListener('click', e => {
                const elemento = e.target
                
                if(elemento.classList.contains('btn-numero')){
                    this.botaoParaDisplay(elemento.innerText)
                }
                if(elemento.classList.contains('btn-limpar')){
                    this.limparDisplay()
                }
                if(elemento.classList.contains('btn-delete')){
                    this.deleteNumero()
                }
                if(elemento.classList.contains('btn-igual')){
                    this.resultado()
                }
            })
        },

        botaoParaDisplay(valor) {
            this.display.value += valor
        },

        limparDisplay() {
            this.display.value = ''
        },

        deleteNumero(){
            this.display.value = this.display.value.slice(0, -1)
        },

        resultado(){
            try {
                this.display.value = eval(this.display.value)
            } catch (error) {
                alert('Resultado inválido')
                this.limparDisplay()
                return
            }
        }  
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()