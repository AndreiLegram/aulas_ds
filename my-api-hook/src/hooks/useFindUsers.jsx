import { useEffect, useState } from 'react';
import axios from "axios";
// O hook é apenas uma simples função que podemos exportar
export function useFindUsers(search) {
    // Definimos os estados necessários para o nosso hook, isso inclui:
    // usuários (data), estado de carregamento (loading) e erros (error)
    const [state, setDataState] = useState({ loading: true, data: [], error: null });
    // A cada renderização do componente, o hook useEffect
    // executa a função listUsers(). 
    useEffect(() => {
        // Ao mover a função listUsers para dentro do useEffect,
        // podemos ver claramente os valores que ela usa. 
        async function listUsers() {
            try {
                // Altera a apiUrl de acordo com a string 'search' 
                const apiUrl = search ?
                    `https://jsonplaceholder.typicode.com/users/${search}` : 'https://jsonplaceholder.typicode.com/users';
                const result = await axios.get(apiUrl);
                // Atualiza o estado de 'loading' 
                setDataState({ loading: false });
                // Atualiza o estado de 'data' com o resultado da API 
                if (result.data) {
                    //Caso esteja sendo feito uma pesquisa, retorna apenas 1 registro
                    if (search !== '') {
                        //Adiciona a resposta em um array 
                        let res = [];
                        res.push(result.data);
                        //Atualiza o estado de 'data' e 'loading' 
                        setDataState({ data: res, loading: false });
                    } else {
                        //Senão, atualiza o estado de 'loading' e 'data' com o array vindo da API 
                        setDataState({ data: result.data, loading: false });
                    }
                } else {
                    //Atualiza o estado de 'data' e 'loading' 
                    setDataState({ data: [], loading: false });
                }
            }
            catch (err) {
                // Atualiza o estado de 'error', 'data' e de 'loading'
                setDataState({ data: [], loading: false, error: "Lamento, ocorreu um erro!" });
            }
        };
        // Primeiro, definimos os estados de loading e error 
        setDataState({ loading: true, error: null });
        // executa a função listUsers(). 
        listUsers();
        //Passamos o novo parâmetro search atualizar o useEffect.
    }, [search]);
    return { state };
}
