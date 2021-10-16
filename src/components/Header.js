import React from 'react'
import './Header.css'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar,Container,Nav} from 'react-bootstrap'
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Pokemon App</Navbar.Brand>
                    </LinkContainer>
                    <Nav className="ms-auto">
                        <Nav.Link as ={Link} to ="/favorite"><FavoriteIcon
                        />Favorite Pokemon</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header

