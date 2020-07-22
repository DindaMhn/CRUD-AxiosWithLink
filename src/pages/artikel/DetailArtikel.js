import React from 'react';
import {Form, Modal,Button} from 'react-bootstrap'

const DetailArtikel = (props) => {
    const {show,onHide, selectedArtikel:{id_artikel,user_name,title,category_name,description,date} } = props
   
    return (
        <>
            <Modal show={show}>
                <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Details Artikel
                </Modal.Title>
                </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group controlId="formArtikelName">
                    <Form.Label>ID Artikel</Form.Label>
                    <Form.Control disabled value={id_artikel}></Form.Control>
                    <Form.Label>Username</Form.Label>
                    <Form.Control disabled value={user_name}></Form.Control>
                    <Form.Label>Title</Form.Label>
                    <Form.Control disabled value={title}></Form.Control>
                    <Form.Label>Category Name</Form.Label>
                    <Form.Control disabled value={category_name}></Form.Control>
                    <Form.Label>Description</Form.Label>
                    <Form.Control disabled value={description}></Form.Control>
                    <Form.Label>Date</Form.Label>
                    <Form.Control disabled value={date}></Form.Control>
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

export default DetailArtikel;