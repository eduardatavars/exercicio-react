import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Tabela from './components/Tabela';

function App() {
    const [resultadoIMC, setResultadoIMC] = useState('');
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);


    const calcularIMC = (nome, peso, altura) => {
        const imc = peso / (altura * altura);


        let resultado;
        if (imc < 18.5) {
            resultado = `Olá ${nome}, seu IMC é ${imc.toFixed(2)} e indica que você está abaixo do peso. É importante cuidar da sua saúde!`;
        } else if (imc >= 18.5 && imc < 24.9) {
            resultado = `Olá ${nome}, seu IMC é ${imc.toFixed(2)} e está na faixa normal! Continue assim, cuidando da sua saúde!`;
        } else if (imc >= 25 && imc < 29.9) {
            resultado = `Olá ${nome}, seu IMC é ${imc.toFixed(2)} e sugere que você está com sobrepeso. Considere hábitos saudáveis para se sentir ainda melhor!`;
        } else if (imc >= 30 && imc < 34.9) {
            resultado = `Olá ${nome}, seu IMC é ${imc.toFixed(2)} e indica obesidade grau 1. Pode ser uma boa ideia buscar orientações para melhorar sua saúde!`;
        } else if (imc >= 35 && imc < 39.9) {
            resultado = `Olá ${nome}, seu IMC é ${imc.toFixed(2)} e aponta para obesidade grau 2. Pense em consultar um profissional de saúde para orientações!`;
        } else {
            resultado = `Olá ${nome}, seu IMC é ${imc.toFixed(2)} e indica obesidade grau 3. É muito importante procurar ajuda profissional para cuidar da sua saúde!`;
        }

        setResultadoIMC(resultado);
        setPeso(peso);
        setAltura(altura);
    }


    return (
        <>
            <h1>Calculadora IMC</h1>
            <Formulario calcularIMC={calcularIMC} />
            {peso > 0 && altura > 0 ? (
                <>
                    <p>{resultadoIMC}</p>
                    <Tabela />
                </>
            ) : (
                <p>Digite seu peso e altura para calcular o IMC.</p>
            )}
        </>
    )
}

export default App