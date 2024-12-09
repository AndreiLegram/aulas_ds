import React from 'react'
import {
  Container,
  GridRow,
  GridColumn,
  Grid,
  Header,
  Image
} from 'semantic-ui-react'

function Home() {
  return (
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Biblioteca do Andrei</Header>
      <Header as='h3' style={{ marginBottom: '4em' }}>Uma biblioteca...</Header>

      <Grid style={{ marginBottom: '2em' }}>
        <GridRow columns={3}>
          <GridColumn>
            <Image src='/images/book-black.png' />
          </GridColumn>
          <GridColumn>
            <Image src='/images/book-black.png' />
          </GridColumn>
          <GridColumn>
            <Image src='/images/book-black.png' />
          </GridColumn>
        </GridRow>

        <GridRow columns={4}>
          <GridColumn>
            <Image src='/images/book-black.png' />
          </GridColumn>
          <GridColumn>
            <Image src='/images/book-black.png' />
          </GridColumn>
          <GridColumn>
            <Image src='/images/book-black.png' />
          </GridColumn>
          <GridColumn>
            <Image src='/images/book-black.png' />
          </GridColumn>
        </GridRow>

        <GridRow columns={5}>
          <GridColumn>
            <Image src='/images/book-black.png' />
          </GridColumn>
          <GridColumn>
            <Image src='/images/book-black.png' />
          </GridColumn>
          <GridColumn>
            <Image src='/images/book-black.png' />
          </GridColumn>
          <GridColumn>
            <Image src='/images/book-black.png' />
          </GridColumn>
          <GridColumn>
            <Image src='/images/book-black.png' />
          </GridColumn>
        </GridRow>
      </Grid>
    </Container>
  );
}

export default Home