import swal from 'sweetalert';
import './User.css'
import { Form } from 'react-bootstrap';
import React, {useState} from 'react';

const CreateUser = (props)=>{
    const [id_user,setidUser]= useState("")
    const [username,setUsername]= useState("")
    const [notelp,setNotelp]= useState("")
    const [address,setAddress]= useState("")
    const [gender,setGender]= useState("")
    
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
        props.addNewUser(id_user,
            username, notelp,
            address, gender)
        swal("", "Success Created New Data", "success")
    }


        return (
            <div className="container">
                <Form>
                    <Form.Group><br />
                        <h3>CREATE User</h3><br />
                        <Form.Control name="id_user" placeholder="Id User" value={id_user} onChange={handleChangeInputIdUser} /><br />
                        <Form.Control name="username" placeholder="Username" value={username} onChange={handleChangeInputUsername} /><br />
                        <Form.Control name="notelp" placeholder="Notelp" value={notelp} onChange={handleChangeInputNotelp} /><br />
                        <Form.Control name="address" placeholder="Address" value={address} onChange={handleChangeInputAddress} /><br />
                        <Form.Control name="gender" placeholder="Gender" value={gender} onChange={handleChangeInputGender} /><br />
                        <button type="submit" className="btn-create" onClick={handleSubmit}>Create</button>
                    </Form.Group>
                </Form>
            </div>
        );
}

export default CreateUser;

// class CreateUser extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             id_user: this.props.id_User,
//             username: this.props.username,
//             notelp: this.props.notelp,
//             address: this.props.address,
//             gender: this.props.gender
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
//         this.props.addNewUser(this.state.id_user,
//             this.state.username, this.state.notelp,
//             this.state.address, this.state.gender)
//         swal("", "Success Created New Data", "success")
//     }

//     render() {

//         return (
//             <div className="container">
//                 <Form onSubmit={this.handleSubmit}>
//                     <Form.Group><br />
//                         <h3>CREATE User</h3><br />
//                         <Form.Control name="id_user" placeholder="Id User" value={this.state.id_user} onChange={this.handleChangeInput} /><br />
//                         <Form.Control name="username" placeholder="Username" value={this.state.username} onChange={this.handleChangeInput} /><br />
//                         <Form.Control name="notelp" placeholder="Notelp" value={this.state.notelp} onChange={this.handleChangeInput} /><br />
//                         <Form.Control name="address" placeholder="Address" value={this.state.address} onChange={this.handleChangeInput} /><br />
//                         <Form.Control name="gender" placeholder="Gender" value={this.state.gender} onChange={this.handleChangeInput} /><br />
//                         <button type="submit" className="btn-create">Create</button>
//                     </Form.Group>
//                 </Form>
//             </div>
//         );
//     }
// }

// export default CreateUser;