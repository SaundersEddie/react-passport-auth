import React, { useState } from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const initialValues = {
    userName: '',
    password: ''
};



export default function Login() {
    const [values, setValues] = useState(initialValues);

    const onChangeOurForm = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("Submit Clicked!")
        const userData = {
            userName: values.userName,
            password: values.password
        }
        console.log ('data being sent: ',userData);
        axios
            .post('/api/user/login', userData)
            .then (res => {
                const ourHeaders = res.headers;
                console.log ('Data Returned:', ourHeaders.authtoken);
                sessionStorage.setItem('authtoken', res.headers.authtoken);
                window.location.reload(true);
            })
    }

    return (
        <>
            <h1>Please Login Below</h1>
            <hr></hr>
            <Form onSubmit={onSubmit}>
                <Row>
                    <Form.Label column lg={2}>
                        User name
                    </Form.Label>
                    <Col>
                        <Form.Control
                            name='userName'
                            type="text"
                            placeholder="Username"
                            value={values.userName}
                            onChange={onChangeOurForm}
                        />
                    </Col>

                    <Form.Label column lg={2}>
                        Password
                    </Form.Label>
                    <Col>
                        <Form.Control
                            name='password'
                            type="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={onChangeOurForm}
                        />
                    </Col>
                    <Row>
                        <div className="form-group">
                            <input
                                type="submit"
                                value="Login"
                                className="Button"
                            />
                        </div>
                    </Row>
                </Row>
            </Form>
        </>
    )
}
