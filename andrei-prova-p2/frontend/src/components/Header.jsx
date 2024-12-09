import React from 'react'
import {
    Container,
    Image,
    Menu,
} from 'semantic-ui-react'
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const handleHome = () => navigate('/home');
    const handleLivros = () => navigate('/livros');
    const handleLivroNovo = () => navigate('/livros/new');

    const location = useLocation();
    const activeHome = ['/', '/home'].includes(location.pathname)
    const activeLivros = location.pathname === '/livros'
    const activeLivroNovo = location.pathname === '/livros/new'

    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header>
                    <Image size='mini' src='/images/book-white.png' style={{ marginRight: '1.5em' }} />
                    <span>Biblioteca do Andrei</span>
                </Menu.Item>
                <Menu.Item as='a' active={activeHome} onClick={handleHome}>Home</Menu.Item>
                <Menu.Item as='a' active={activeLivros} onClick={handleLivros}>Livros</Menu.Item>
                <Menu.Item as='a' active={activeLivroNovo} onClick={handleLivroNovo}>Novo Livro</Menu.Item>
            </Container>
        </Menu>
    );
}

export default Header