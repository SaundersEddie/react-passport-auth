import React from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Register() {
    return (
        <>
            <h1>Welcome to the React Passport Auth App</h1>
            <h3>Please fill out the fields below to register an account</h3>

            <Row>
                <Form.Label column lg={2}>
                    First Name
                </Form.Label>
                <Col>
                    <Form.Control type="text" placeholder="First Name" />
                </Col>
                <Form.Label column lg={2}>
                    Last Name
                </Form.Label>
                <Col>
                    <Form.Control type="text" placeholder="Last Name" />
                </Col>
            </Row>
            <br />
            <Row>
                <Form.Label column lg={2}>
                    Username
                </Form.Label>
                <Col>
                    <Form.Control type="text" placeholder="Username" />
                </Col>
                <Form.Label column lg={2}>
                    Password
                </Form.Label>
                <Col>
                    <Form.Control type="text" placeholder="Password" />
                </Col>
            </Row>
            <Row>
                <Form.Label column lg={2}>
                    Email
                </Form.Label>
                <Col>
                    <Form.Control type="text" placeholder="Email" />
                </Col>
                <Form.Check type='radio' id={`isAdmin`}>
                    <Form.Check.Input type='radio' isValid />
                    <Form.Check.Label>{`isAdmin`}</Form.Check.Label>
                </Form.Check>
            </Row>
        </>
    )
}
