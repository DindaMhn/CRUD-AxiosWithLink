import { Form, Modal, Button } from 'react-bootstrap'
import React, { Component } from 'react';

class UpdateArtikel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id_artikel: this.props.selectedArtikel.id_artikel,
            id_user: this.props.selectedArtikel.id_user,
            title: this.props.selectedArtikel.title,
            description: this.props.selectedArtikel.description,
            date: this.props.selectedArtikel.date,
            isCreated: false,
            isUpdated: false
        }
    }
    handleChangeInput = (event) => {
        let name = event.target.name
        this.setState({
            ...this.state,
            [name]: event.target.value
        })
    }
    handleSubmit = () => {
        this.props.update(
            this.state.id_user, this.state.title,
            this.state.description, this.state.date,this.state.id_artikel)
        this.props.onHide()
    }
    render() {
        const { show, onHide } = this.props
        return (
            <>
                <Modal show={show}>
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Update Artikel
                </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formArtikelName">
                                <Form.Label>ID Artikel</Form.Label>
                                <Form.Control name="id_artikel" value={this.state.id_artikel} onChange={this.handleChangeInput}></Form.Control>
                                <Form.Label>ID User</Form.Label>
                                <Form.Control name="id_user" value={this.state.id_user} onChange={this.handleChangeInput}></Form.Control>
                                <Form.Label>Title</Form.Label>
                                <Form.Control name="title" value={this.state.title} onChange={this.handleChangeInput}></Form.Control>
                                <Form.Label>Description</Form.Label>
                                <Form.Control name="description" value={this.state.description} onChange={this.handleChangeInput}></Form.Control>
                                <Form.Label>Date</Form.Label>
                                <Form.Control name="date" value={this.state.date} onChange={this.handleChangeInput}></Form.Control>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.handleSubmit()}>Save</Button>
                        <Button onClick={onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default UpdateArtikel;