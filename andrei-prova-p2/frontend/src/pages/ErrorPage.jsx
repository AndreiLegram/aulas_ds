import React from 'react'
import { Link } from "react-router-dom";
import { MessageHeader, Message } from 'semantic-ui-react'
function ErrorPage() {
    return (
        <Message warning size='big'>
            <MessageHeader>Página não encontrada!</MessageHeader>
            <p>
                Esta página está indisponível ou não existe.
            </p>
            <Link to='/home'>Voltar para o início</Link>
        </Message>
    );
}
export default ErrorPage;