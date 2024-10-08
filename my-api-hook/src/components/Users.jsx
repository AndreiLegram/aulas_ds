import React, { useState } from 'react';
import { useFindUsersReducer } from '../hooks/useFindUsersReducer'; function Users() {
    //Cria um estado para o conteúdo da pesquisa 
    const [search, setSearch] = useState('');
    // use seu próprio hook para carregar os dados da API 
    const { state } = useFindUsersReducer(search);
    // Desestruture isLoading, data e error de state 
    const { data, loading, error } = state;
    return (
        <div>
            {loading ? <p>Carregando...</p> :
                <ul>
                    {
                        data &&
                        data.length > 0 &&
                        data.map(item => (
                            //Atualiza o estado de search para o id selecionado na lista 
                            <li key={item.id} onClick={() => setSearch(item.id)}>
                                {item.username}: {item.name}
                            </li>
                        ))
                    }
                </ul>}
            {error ? <p>{error}</p> : null}
        </div>
    );
}
export default Users;