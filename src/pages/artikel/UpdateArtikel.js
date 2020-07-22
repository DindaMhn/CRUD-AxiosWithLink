import React, { Component } from 'react';
import { getArtikel, updateArtikel } from '../../api/artikel/artikel';
import Artikel from '../artikel/Artikel'

class UpdateArtikel extends Component {
    constructor(props){
        super(props)
        this.state={
            id_artikel: this.props.id_artikel,
            id_user: this.props.id_user,
            title: this.props.title,
            description: this.props.description,
            date: this.props.date,
            isCreated:false,
            isUpdated:false
        }
    }
    loadData = () => {
        getArtikel()
    }
    handleChangeInput = (event) => {
        let name = event.target.name
        this.setState({
            ...this.state,
            [name]: event.target.value
        })
    }
    saveNewArtikel = () => {
        updateArtikel({
            id_artikel: this.state.id_artikel,
            id_user: this.state.id_user,
            title: this.state.title,
            description: this.state.description,
            date: this.state.date,
        })
        this.setState({
            isCreated: false,
            isUpdated: true
        })
        this.loadData()
    }
    render() {
        console.log(this.state);
        if(this.state.isUpdated){
            return(<div><Artikel/></div>);
        }
        return (
            <div>
                <h3>UPDATE ARTIKEL</h3>
                <input name="id_artikel" placeholder="Id Artikel" value={this.state.id_artikel} onChange={this.handleChangeInput} /><br />
                <input name="id_user" placeholder="Id User" value={this.state.id_user} onChange={this.handleChangeInput} /><br />
                <input name="title" placeholder="Title" value={this.state.title} onChange={this.handleChangeInput} /><br />
                <input name="description" placeholder="Description" value={this.state.description} onChange={this.handleChangeInput} /><br />
                <input name="date" placeholder="Date" value={this.state.date} onChange={this.handleChangeInput} /><br />
                <button onClick={this.saveNewArtikel}>Save</button><br /><br />
            </div>
        );
    }
}

export default UpdateArtikel;
// import { Form, Modal, Button } from 'react-bootstrap'
// import React, { Component } from 'react';
// import { getArtikel, updateArtikel } from '../../api/artikel/artikel';

// class UpdateArtikel extends Component {
//     state = {
//         id_artikel: this.props.id_artikel,
//         id_user: this.props.id_user,
//         title: this.props.title,
//         description: this.props.description,
//         date: this.props.date,
//     }

//     loadData = () => {
//         getArtikel()
//     }
//     saveNewArtikel = () => {
//         updateArtikel({
//             id_artikel: this.state.id_artikel,
//             id_user: this.state.id_user,
//             title: this.state.title,
//             description: this.state.description,
//             date: this.state.date,
//         })
//         this.loadData()
//     }
//     render() {
//         const {show,onHide, selectedArtikel:{id_artikel,id_user,title,description,date} } = this.props
//         return (
//             <>
//                 <Modal show={show}>
//                     <Modal.Header>
//                         <Modal.Title id="contained-modal-title-vcenter">
//                             Details Artikel
//                 </Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         <Form>
//                             <Form.Group controlId="formArtikelName">
//                                 <Form.Label>ID Artikel</Form.Label>
//                                 <Form.Control  value={id_artikel}></Form.Control>
//                                 <Form.Label>ID User</Form.Label>
//                                 <Form.Control  value={id_user}></Form.Control>
//                                 <Form.Label>Title</Form.Label>
//                                 <Form.Control  value={title}></Form.Control>
//                                 <Form.Label>Description</Form.Label>
//                                 <Form.Control value={description}></Form.Control>
//                                 <Form.Label>Date</Form.Label>
//                                 <Form.Control value={date}></Form.Control>
//                             </Form.Group>
//                         </Form>
//                     </Modal.Body>
//                     <Modal.Footer>
//                         <Button onClick={onHide}>Save</Button>
//                         <Button onClick={onHide}>Close</Button>
//                     </Modal.Footer>
//                 </Modal>
//             </>
//         );
//     }
// }

// export default UpdateArtikel;