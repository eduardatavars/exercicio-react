import React from 'react';

const Tabela = () => {
  return (
    <table>
        <thead>
            <tr>
                <th>IMC (kg/m 2)</th>
                <th>Classificação</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Abaixo de 18,5</td>
                <td>Abaixo do peso</td>
            </tr>
            <tr>
                <td>18,5 a 24,9</td>
                <td>Peso normal</td>
            </tr>
            <tr>
                <td>25 a 29,9</td>
                <td>Sobrepeso</td>
            </tr>
            <tr>
                <td>30 a 34,9</td>
                <td>Obesidade grau 1 (moderada)</td>
            </tr>
            <tr>
                <td>35 a 39,9</td>
                <td>Obesidade grau 2 (severa)</td>
            </tr>
            <tr>
                <td>Acima de 40</td>
                <td>Obesidade grau 3 (mórbida)</td>
            </tr>
        </tbody>
    </table>
  )
}

export default Tabela;