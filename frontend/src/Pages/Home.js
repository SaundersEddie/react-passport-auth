import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Home() {

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("Test Clicked Clicked!")
        console.log(sessionStorage.getItem('authtoken'));
        axios
            .get('/api/prot/', 
                { 'headers': 
                    {'authtoken': sessionStorage.getItem('authtoken') }
                })
            .then (res => {
                console.log ('Data Returned:', res.data);
            })
    }


    return (
        <>
            <h1>Our Home Page.</h1>
            <hr></hr>
            <p>This is a work in progress page, so please excuse the mess while items get cleaned up and shuffled around.</p>
            <p>The idea behind this project was to do a fairly simple react app, that implemented API coding, react, and react-bootstrap. </p>
            <p>The code itself is not some complex code and visually pleasing masterpiece. Many improvements can still, and will be made over time.</p>
            <p>The source code can be located here:</p>
            <p><a href="https://github.com/EXSsaunders/washingtondc" target="_blank" rel="noopener noreferrer">Source Code</a></p>
            <p>Eddie</p>

            <p>Testing Auth Setup</p>

            <Form onSubmit={onSubmit}>
            <Row>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Protected Route"
                        className="Button"
                    />
                </div>
            </Row>
            </Form>
        </>
    )
}
