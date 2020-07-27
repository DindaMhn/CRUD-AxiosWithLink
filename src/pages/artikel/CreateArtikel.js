import React, {useState} from 'react';
import swal from 'sweetalert';
import './Artikel.css'
import { Form } from 'react-bootstrap';

const CreateArtikel = (props)=>{
    const [id_artikel, setIdArtikel] = useState(props.id_artikel);
    const [id_user, setIdUser] = useState(props.id_user);
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [date, setDate] = useState(props.date);
    const [id_category,setidCategory] = useState(props.id_category)
    
    const handleChangeInputIdArtikel = (e) => {
        setIdArtikel(e.target.value)
    }
    const handleChangeInputIdUser = (e)=>{
        setIdUser(e.target.value)
    }
    const handleChangeInputTitle = (e)=>{
        setTitle(e.target.value)
    }
    const handleChangeInputDescription =(e)=>{
        setDescription(e.target.value)
    }
    const handleChangeInputDate = (e)=>{
        setDate(e.target.value)
    }
    const handleChangeInputIdCategory = (e)=>{
        setidCategory(e.target.value)
    }

    const handleSubmit = () => {
        console.log("submit button create");
        props.addNewArtikel(id_artikel,id_user,title,
           description, date, id_category)
        swal("", "Success Created New Data", "success")
        
    }

        return (
            <div className="container">
                <Form>
                    <Form.Group><br />
                        <h3>CREATE ARTIKEL</h3><br />
                        <Form.Control name="id_artikel" placeholder="Id Artikel" value={id_artikel} onChange={handleChangeInputIdArtikel} /><br />
                        <Form.Control name="id_user" placeholder="Id User" value={id_user} onChange={handleChangeInputIdUser} /><br />
                        <Form.Control name="title" placeholder="Title" value={title} onChange={handleChangeInputTitle} /><br />
                        <Form.Control name="description" placeholder="Description" value={description} onChange={handleChangeInputDescription} /><br />
                        <Form.Control name="date" placeholder="Date" value={date} onChange={handleChangeInputDate} /><br />
                        <Form.Control name="id_category" placeholder="Id Category" value={id_category} onChange={handleChangeInputIdCategory} /><br />
                        <button type="submit" className="btn-create" onClick={handleSubmit}>Create</button>
                    </Form.Group>
                </Form>
            </div>
        );
}

export default CreateArtikel;
// class CreateArtikel extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             id_artikel: this.props.id_artikel,
//             id_user: this.props.id_user,
//             title: this.props.title,
//             description: this.props.description,
//             date: this.props.date,
//             id_category: this.props.id_category,
//             isCreated: false
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
//         this.props.addNewArtikel(this.state.id_artikel,
//             this.state.id_user, this.state.title,
//             this.state.description, this.state.date,
//             this.state.id_category)
//         swal("", "Success Created New Data", "success")
//             // .then(() => {
//             //     this.setState({
//             //         isCreated: true
//             //     });
//             // })
//     }

//     render() {
//         // if (this.state.isCreated) {
//         //     return (<Artikel />)
//         // }
//         return (
//             <div className="container">
//                 <Form onSubmit={this.handleSubmit}>
//                     <Form.Group><br />
//                         <h3>CREATE ARTIKEL</h3><br />
//                         <Form.Control name="id_artikel" placeholder="Id Artikel" value={this.state.id_artikel} onChange={this.handleChangeInput} /><br />
//                         <Form.Control name="id_user" placeholder="Id User" value={this.state.id_user} onChange={this.handleChangeInput} /><br />
//                         <Form.Control name="title" placeholder="Title" value={this.state.title} onChange={this.handleChangeInput} /><br />
//                         <Form.Control name="description" placeholder="Description" value={this.state.description} onChange={this.handleChangeInput} /><br />
//                         <Form.Control name="date" placeholder="Date" value={this.state.date} onChange={this.handleChangeInput} /><br />
//                         <Form.Control name="id_category" placeholder="Id Category" value={this.state.id_category} onChange={this.handleChangeInput} /><br />
//                         <button type="submit" className="btn-create">Create</button>
//                     </Form.Group>
//                 </Form>
//             </div>
//         );
//     }
// }

// export default CreateArtikel;