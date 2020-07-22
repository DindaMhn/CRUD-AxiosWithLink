import React, { Component } from 'react';
import ArtikelList from './ArtikelList'
import { createArtikel, getArtikel, deleteArtikel, getArtikelById } from '../../api/artikel/artikel';
import UpdateArtikel from './UpdateArtikel';
import DetailArtikel from './DetailArtikel';
import swal from 'sweetalert';
import './Artikel.css'

class Artikel extends Component {
    state = {
        id_artikel: "",
        id_user: "",
        title: "",
        description: "",
        date: "",
        artikel: [],
        message: "",
        showDetail: false,
        selectedArtikel: {},
        isCreated: false,
        isUpdated: false
    }
    componentDidMount() {
        this.loadData()
    }
    loadData = () => {
        getArtikel().then((artikel) => {
            console.log(artikel);
            this.setState({ ...this.state, artikel: artikel.data.data, message: artikel.data.message })
        }).catch((error) => {
            alert(error)
        })
    }
    handleChangeInput = (event) => {
        let name = event.target.name
        this.setState({
            ...this.state,
            [name]: event.target.value
        })
    }
    addNewArtikel = () => {
        console.log(" add clicked");
        createArtikel({
            id_artikel: this.state.id_artikel,
            id_user: this.state.id_user,
            title: this.state.title,
            description: this.state.description,
            date: this.state.date,
            id_category: this.state.id_category
        })
        this.setState({
            isCreated: true,
            isUpdated: false,
        })
        this.loadData()
    }
    // getArtikelById = (id) => {
    //     getArtikelById(id).then(res => {
    //         this.setState({
    //             ...this.state, selectedArtikel: this.state.selectedArtikel
    //         })
    //     })
    // }
    updateArtikel = (id_user, title, description, date, id_artikel) => {
        console.log("updated clicked");
        this.setState({
            id_artikel: id_artikel,
            id_user: id_user,
            title: title,
            description: description,
            date: date,
            isCreated: false,
            isUpdated: true,
        })
    }
    deleteArtikel = (id_artikel) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteArtikel(id_artikel)
                        .then(() => {
                            this.loadData()
                        })
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your imaginary file is safe!");
                }
            });

    }
    showDetails = (artikel) => {
        this.setState({
            ...this.state,
            showDetail: !this.state.showDetail,
            selectedArtikel: { ...artikel }

        })
        console.log(this.state.selectedArtikel);
        console.log(artikel);
    }
    hideDetails = () => {
        this.setState({
            showDetail: !this.state.showDetail,
            selectedArtikel: {}
        })
    }

    render() {
        if (this.state.isCreated) {
            return (<Artikel />);
        }
        if (this.state.isUpdated) {
            return (<UpdateArtikel id_artikel={this.state.id_artikel}
                id_user={this.state.id_user} title={this.state.title}
                description={this.state.description} date={this.state.date}
            />)
            // return(<UpdateArtikel artikel={this.state.artikel} show={this.state.showDetail} onHide={this.hideDetails}
            //     selectedArtikel={this.state.selectedArtikel}/>)
        }

        return (
            <div>
                <ArtikelList message={this.state.message} artikel={this.state.artikel} update={this.updateArtikel}
                    deleteArtikel={this.deleteArtikel} showDetail={this.showDetails} />
                <DetailArtikel artikel={this.state.artikel} show={this.state.showDetail} onHide={this.hideDetails}
                    selectedArtikel={this.state.selectedArtikel} />
                {/* <UpdateArtikel artikel={this.state.artikel} show={this.state.showDetail} onHide={this.hideDetails}
                selectedArtikel={this.state.selectedArtikel}/> */}
                <div className="form-group">
                    <br/><br/>
                    <h3>CREATE ARTIKEL</h3>
                    <input className="form-control" name="id_artikel" placeholder="Id Artikel" value={this.state.id_artikel} onChange={this.handleChangeInput} /><br />
                    <input className="form-control" name="id_user" placeholder="Id User" value={this.state.id_user} onChange={this.handleChangeInput} /><br />
                    <input className="form-control" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChangeInput} /><br />
                    <input className="form-control" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChangeInput} /><br />
                    <input className="form-control" name="date" placeholder="Date" value={this.state.date} onChange={this.handleChangeInput} /><br />
                    <input className="form-control" name="id_category" placeholder="Id Category" value={this.state.id_category} onChange={this.handleChangeInput} /><br />
                    <button className="btn-create" onClick={this.addNewArtikel}>Create Artikel</button><br /><br />
                </div>
            </div>
        );
    }
}

export default Artikel;