import { Form, Modal, Button } from 'react-bootstrap'
import React, {useState} from 'react';

const UpdateUser=(props)=> {
    const [id_user,setidUser]= useState(props.selectedUser.id_user)
    const [username,setUsername]= useState(props.selectedUser.username)
    const [notelp,setNotelp]= useState(props.selectedUser.notelp)
    const [address,setAddress]= useState(props.selectedUser.address)
    const [gender,setGender]= useState(props.selectedUser.gender)
     
    const handleChangeInputIdUser = (event) => {
        setidUser(event.target.value)
    }
    const handleChangeInputUsername = (event) => {
        setUsername(event.target.value)
    }
    const handleChangeInputNotelp = (event) => {
        setNotelp(event.target.value)
    }
    const handleChangeInputAddress = (event) => {
        setAddress(event.target.value)
    }
    const handleChangeInputGender = (event) => {
        setGender(event.target.value)
    }
    
    const handleSubmit = () => {
        props.update(username,notelp, address,gender,id_user)
        props.onHide()
    }
        const { show, onHide } = props
        return (
            <>
                <Modal show={show}>
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Update User
                </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formUserName">
                                <Form.Label>ID User</Form.Label>
                                <Form.Control name="id_user" value={id_user} onChange={handleChangeInputIdUser}></Form.Control>
                                <Form.Label>UserName</Form.Label>
                                <Form.Control name="username" value={username} onChange={handleChangeInputUsername}></Form.Control>
                                <Form.Label>No Telp</Form.Label>
                                <Form.Control name="notelp" value={notelp} onChange={handleChangeInputNotelp}></Form.Control>
                                <Form.Label>Address</Form.Label>
                                <Form.Control name="address" value={address} onChange={handleChangeInputAddress}></Form.Control>
                                <Form.Label>Gender</Form.Label>
                                <Form.Control name="gender" value={gender} onChange={handleChangeInputGender}></Form.Control>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => handleSubmit()}>Save</Button>
                        <Button onClick={onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
}

export default UpdateUser;
// class UpdateUser extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             id_user: this.props.selectedUser.id_user,
//             username: this.props.selectedUser.username,
//             notelp: this.props.selectedUser.notelp,
//             address: this.props.selectedUser.address,
//             gender : this.props.selectedUser.gender,
//             isCreated: false,
//             isUpdated: false
//         }
//     }
//     handleChangeInput = (event) => {
//         let name = event.target.name
//         this.setState({
//             ...this.state,
//             [name]: event.target.value
//         })
//     }
//     handleSubmit = () => {
//         this.props.update(
//             this.state.username,
//             this.state.notelp, this.state.address,this.state.gender,
//             this.state.id_user)
//         this.props.onHide()
//     }
//     render() {
//         const { show, onHide } = this.props
//         return (
//             <>
//                 <Modal show={show}>
//                     <Modal.Header>
//                         <Modal.Title id="contained-modal-title-vcenter">
//                             Update User
//                 </Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         <Form>
//                             <Form.Group controlId="formUserName">
//                                 <Form.Label>ID User</Form.Label>
//                                 <Form.Control name="id_user" value={this.state.id_user} onChange={this.handleChangeInput}></Form.Control>
//                                 <Form.Label>UserName</Form.Label>
//                                 <Form.Control name="username" value={this.state.username} onChange={this.handleChangeInput}></Form.Control>
//                                 <Form.Label>No Telp</Form.Label>
//                                 <Form.Control name="notelp" value={this.state.notelp} onChange={this.handleChangeInput}></Form.Control>
//                                 <Form.Label>Address</Form.Label>
//                                 <Form.Control name="address" value={this.state.address} onChange={this.handleChangeInput}></Form.Control>
//                                 <Form.Label>Gender</Form.Label>
//                                 <Form.Control name="gender" value={this.state.gender} onChange={this.handleChangeInput}></Form.Control>
//                             </Form.Group>
//                         </Form>
//                     </Modal.Body>
//                     <Modal.Footer>
//                         <Button onClick={() => this.handleSubmit()}>Save</Button>
//                         <Button onClick={onHide}>Close</Button>
//                     </Modal.Footer>
//                 </Modal>
//             </>
//         );
//     }
// }

// export default UpdateUser;