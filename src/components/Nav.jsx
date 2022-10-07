import React from "react"
// import Navbar from 'react-bootstrap/Navbar';

// import Container from 'react-bootstrap/Container';
// import { NavLink } from 'react-router-dom';
// import Image from 'react-bootstrap/Image';
// import Nav from 'react-bootstrap/Nav';

export default class NavBar extends React.Component {
    render(){
        return(
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/new">Add A Engine</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        )
    }

    // render(){
    //     return (
    //         <Navbar sticky='top' bg='dark' variant='dark' className='mb-4'>
    //         <Container>
    //             <Navbar.Brand>
    //             <Image src={'https://images.crowdspring.com/blog/wp-content/uploads/2022/08/18131304/apple_logo_black.svg_.png'} width='30' className='me-2' />
    //             Pokeverse
    //             </Navbar.Brand>
        
    //             <Nav className='me-auto'>
    //             <Nav.Link as="div">
    //                 <li><NavLink to='/'>Home</NavLink></li>
    //                 <li><NavLink to='/new'>Add A Engine</NavLink></li>
    //             </Nav.Link>
    //             </Nav>
    //         </Container>
    //         </Navbar>
    //     );
    // }
  }