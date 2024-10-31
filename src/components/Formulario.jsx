import React, { useState } from 'react';

const Formulario = ({calcularIMC}) => {
    const [nome, setNome] = useState('');
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        calcularIMC(nome, peso, altura); 
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Seu nome" onChange={(e) => setNome(e.target.value)} />
            <input type="number" placeholder="Seu peso" onChange={(e) => setPeso(parseFloat(e.target.value))} />
            <input type="number" placeholder="Sua altura" step="0.01" onChange={(e) => setAltura(parseFloat(e.target.value))} />               
            <button type="submit">Calcular IMC</button>
        </form>          
  )
}

export default Formulario;