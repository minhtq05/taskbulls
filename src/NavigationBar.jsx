import React from 'react'
import { Navbar, Container, Button, Form, InputGroup, Row, Col } from 'react-bootstrap';
import logo from './images/logo.png';
import './NavigationBar.css'
import cutelogo from './images/cutelogo.png';

function NavBar() {
    return (
        <Navbar className="justify-content-between bg-transparent">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    TaskBulls
                </Navbar.Brand>
                <Form inline className="float-right">
                    <Row>
                        <Col xs="auto">
                            <InputGroup>
                                <InputGroup.Text id="base-addon1">@</InputGroup.Text>
                                <Form.Control
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="base-addon1"
                                    className="mr-sm-2"
                                />
                            </InputGroup>
                        </Col>
                        <Col xs="auto">
                            <Button type="submit" style={{ backgroundColor: '#EB6440', border: 'none' }}>Login</Button>
                        </Col>
                        <Col xs="auto">
                            <Button type="submit" style={{ backgroundColor: '#EB6440', border: 'none' }}>Signup</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Navbar>
    );
}

export default NavBar;
