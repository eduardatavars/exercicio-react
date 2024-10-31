import React, { useState } from 'react';

const Formulario = () => {
    const [nome, setNome] = useState('');
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    const alteraNome = (evento) => {
        setNome(() => {
            return evento.target.value;
        })
    }

    const resultado = () => {
        const calculo = peso / (altura * altura);
        const imc = calculo.toFixed(2);

        if (imc < 18.5) {
            return (
                <p>Olá {nome}, seu IMC é {imc} e indica que você está abaixo do peso. É importante cuidar da sua saúde!</p>
            )
        } else if (imc >= 18.5 && imc < 24.9) {
            return (
                <p>Olá {nome}, seu IMC é {imc} e está na faixa normal! Continue assim, cuidando da sua saúde!</p>
            )
        } else if (imc >= 25 && imc < 29.9) {
            return (
                <p>Olá {nome}, seu IMC é {imc} e sugere que você está com sobrepeso. Considere hábitos saudáveis para se sentir ainda melhor!</p>
            )
        } else if (imc >= 30 && imc < 34.9) {
            return (
                <p>Olá ${nome}, seu IMC é {imc} e indica obesidade grau 1. Pode ser uma boa ideia buscar orientações para melhorar sua saúde!</p>
            )
        } else if (imc >= 35 && imc < 39.9) {
            return (
                <p>Olá ${nome}, seu IMC é {imc} e aponta para obesidade grau 2. Pense em consultar um profissional de saúde para orientações!</p>
            )
        } else {
            return (
                <p>Olá ${nome}, seu IMC é {imc} e indica obesidade grau 3. É muito importante procurar ajuda profissional para cuidar da sua saúde!</p>
            )
        }
    }

    return (
        <div className="container">
            <h1>Calculadora IMC</h1>
            <form>
                <input type="text" placeholder="Seu nome" onChange={alteraNome} />
                <input type="number" placeholder="Seu peso" onChange={({target}) => setPeso(parseFloat(target.value))} />
                <input type="number" placeholder="Sua altura" step="0.01" onChange={({target}) => setAltura(parseFloat(target.value))} />               
            </form>
            <div className="resultado">{peso > 0 && altura > 0 ? resultado() : "Digite seu peso e altura para calcular o IMC."}</div>
        </div>
  )
}

export default Formulario;