import React from 'react'
import {
  Container,
  Image,
  List,
  Segment,
} from 'semantic-ui-react'

const Footer = () => (
    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '3em 0em' }}>
      <Container textAlign='center'>
        <Image centered size='mini' src='/images/book-white.png' />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' target="_blank" href='https://moodle.bento.ifrs.edu.br/course/view.php?id=8553'>
            Desenvolvimento de Sistemas
          </List.Item>
          <List.Item as='a' target="_blank" href='https://ifrs.edu.br/bento/'>
            IFRS - BG
          </List.Item>
        </List>
      </Container>
    </Segment>
)

export default Footer