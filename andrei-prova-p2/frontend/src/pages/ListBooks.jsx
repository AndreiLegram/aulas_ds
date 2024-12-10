import React, { useState } from 'react'
import {
  CardGroup,
  Container,
  Header,
  Loader
} from 'semantic-ui-react'
import { useFindBooksReducer } from '../hooks/useFindBooksReducer.jsx';
import BookCard from '../components/BookCard'

function ListBooks() {
  const [search, setSearch] = useState('');
  const { state } = useFindBooksReducer(search);
  const { data, loading, error } = state;
  return (
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Listagem de Livros</Header>
      <CardGroup itemsPerRow={2}>
            {loading ?
                <Loader active inline='centered'>Carregando</Loader>
            :
                <>{
                    data && data.docs.length > 0
                    ?
                      data.docs.map(item => <BookCard props={item} onClick={() => setSearch(item._id)} />)
                    :
                      <Header as='h3' style={{ margin: '3em 4em 3em 1em' }}>Nenhum livro encontrado...</Header>
                }</>
            }
            {error ? <p>{error}</p> : null}
        </CardGroup>
    </Container>
  );
}

export default ListBooks