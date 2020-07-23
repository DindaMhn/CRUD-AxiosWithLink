import React, { Component } from 'react';
import swal from 'sweetalert';
import Artikel from './Artikel'
import './Artikel.css'
import { Form } from 'react-bootstrap';

class CreateArtikel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_artikel: this.props.id_artikel,
            id_user: this.props.id_user,
            title: this.props.title,
            description: this.props.description,
            date: this.props.date,
            id_category: this.props.id_category,
            isCreated: false
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
        this.props.addNewArtikel(this.state.id_artikel,
            this.state.id_user, this.state.title,
            this.state.description, this.state.date,
            this.state.id_category)
        swal("", "Success Created New Data", "success")
            .then((isOk) => {
                if (isOk) {
                    this.setState({
                        isCreated: true
                    });
                }
            });
    }

    render() {
        if (this.state.isCreated) {
            return (<Artikel />)
        }
        return (
            <div className="container">
                <Form>
                    <Form.Group><br/>
                        <h3>CREATE ARTIKEL</h3><br/>
                        <Form.Control name="id_artikel" placeholder="Id Artikel" value={this.state.id_artikel} onChange={this.handleChangeInput} /><br />
                        <Form.Control name="id_user" placeholder="Id User" value={this.state.id_user} onChange={this.handleChangeInput} /><br />
                        <Form.Control name="title" placeholder="Title" value={this.state.title} onChange={this.handleChangeInput} /><br />
                        <Form.Control name="description" placeholder="Description" value={this.state.description} onChange={this.handleChangeInput} /><br />
                        <Form.Control name="date" placeholder="Date" value={this.state.date} onChange={this.handleChangeInput} /><br />
                        <Form.Control name="id_category" placeholder="Id Category" value={this.state.id_category} onChange={this.handleChangeInput} /><br />
                        <button className="btn-create" onClick={this.handleSubmit}>Create</button>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default CreateArtikel;