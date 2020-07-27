import React from 'react';
import {Form, Modal,Button} from 'react-bootstrap'

const DetailUser = (props) => {
    const {show,onHide, selectedUser:{id_user,username,notelp,address,gender} } = props
   
    return (
        <>
            <Modal show={show}>
                <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Details User
                </Modal.Title>
                </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group controlId="formUserName">
                    <Form.Label>ID User</Form.Label>
                    <Form.Control disabled value={id_user}></Form.Control>
                    <Form.Label>Username</Form.Label>
                    <Form.Control disabled value={username}></Form.Control>
                    <Form.Label>NoTelp</Form.Label>
                    <Form.Control disabled value={notelp}></Form.Control>
                    <Form.Label>Address</Form.Label>
                    <Form.Control disabled value={address}></Form.Control>
                    <Form.Label>Gender</Form.Label>
                    <Form.Control disabled value={gender}></Form.Control>
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
            </Modal>
        </>
    );
};

export default DetailUser;