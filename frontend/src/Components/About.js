import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function About() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="link" onClick={handleShow}>
                About
            </Button>
            <Modal show={show} onHide={handleClose} animation={true} scrollable={true}>
                <Modal.Header>
                    <Modal.Title>About React Passport Auth</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>React Passport Auth was coded by Eddie Saunders</p>
                    <p>This is for educational use only, and in no way constituents a full secure application</p>
                    <a href="https://github.com/SaundersEddie/react-passport-auth" target="_blank" rel="noreferrer">Github</a><br />
                    <a href="mailto:edwyn.saunders@outlook.com">Email</a>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}