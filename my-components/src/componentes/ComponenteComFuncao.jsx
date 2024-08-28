import React from 'react';
export default props => {
    const aprovados = ['Maria', 'Ana', 'João', 'Roberto'];
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>);
    }
    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}
