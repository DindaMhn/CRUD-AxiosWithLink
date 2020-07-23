import React, { Component } from 'react';
import ArtikelList from './ArtikelList'
import { createArtikel, getArtikel, deleteArtikel, updateArtikel } from '../../api/artikel/artikel';
import UpdateArtikel from './UpdateArtikel';
import DetailArtikel from './DetailArtikel';
import swal from 'sweetalert';
import './Artikel.css'
import CreateArtikel from './CreateArtikel';

class Artikel extends Component {
    state = {
        id_artikel: "",
        id_user: "",
        title: "",
        description: "",
        date: "",
        artikel: [],
        message: "",
        showUpdate: false,
        showDetail: false,
        isCreated :false,
        selectedArtikel: {},
        isUpdated: false,
        isLoading:true
    }
    componentDidMount() {
        this.loadData()
    }
    loadData = () => {
        getArtikel().then((artikel) => {
            this.setState({ ...this.state, artikel: artikel.data.data, message: artikel.data.message,isLoading:false })
        }).catch((error) => {
            alert(error)
        })
    }
    addNewArtikel = (id_artikel,id_user, title, description, date,id_category) => {
        createArtikel({
            id_artikel: id_artikel,
            id_user: id_user,
            title: title,
            description: description,
            date: date,
            id_category: id_category
        }).then(() => {
            this.loadData()
        })
    }
    onCreateClicked = ()=>{
        this.setState({
            isCreated:true
        })
    }
    showUpdate = (artikel) => {
        this.setState({
            ...this.state,
            showUpdate: !this.state.showUpdate,
            selectedArtikel: { ...artikel }

        })
    }
    hideUpdate = () => {
        this.setState({
            showUpdate: !this.state.showUpdate,
            selectedArtikel: {}
        })
    }
    updateArtikel = (id_user, title, description, date, id_artikel) => {
        swal({
            title: "Are you sure will update the selected data?",
            text: "",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willUpdate) => {
                if (willUpdate) {
                    updateArtikel({
                        id_user: id_user,
                        title: title,
                        description: description,
                        date: date,
                        id_artikel: id_artikel
                    })
                        .then(() => {
                            this.loadData()
                        })
                    swal("Your data has been updated!", {
                        icon: "success",
                    });
                } else {
                    swal("Your data is not updated!");
                }
            });

        this.setState({
            isUpdated: true,
        })
    }
    deleteArtikel = (id_artikel) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary data!",
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
                    swal("Your data has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your imaginary data is safe!");
                }
            });

    }
    showDetails = (artikel) => {
        this.setState({
            ...this.state,
            showDetail: !this.state.showDetail,
            selectedArtikel: { ...artikel }

        })
    }
    hideDetails = () => {
        this.setState({
            showDetail: !this.state.showDetail,
            selectedArtikel: {}
        })
    }

    render() {
        let resultUpdate
        if (this.state.showUpdate) {
            resultUpdate = (<UpdateArtikel show={this.state.showUpdate} onHide={this.hideUpdate}
                selectedArtikel={this.state.selectedArtikel} update={this.updateArtikel} />)
        }
        if(this.state.isCreated){
            return(<CreateArtikel addNewArtikel={this.addNewArtikel} id_artikel={this.state.id_artikel}
            id_user={this.state.id_user} title={this.state.title} description={this.state.description}
            date={this.state.date} id_category={this.state.id_category}/>)
        }

        return (
            <div>
                <ArtikelList message={this.state.message} artikel={this.state.artikel}
                    deleteArtikel={this.deleteArtikel} showDetail={this.showDetails} showUpdate={this.showUpdate}
                    isLoading={this.state.isLoading} />
                <DetailArtikel artikel={this.state.artikel} show={this.state.showDetail} onHide={this.hideDetails}
                    selectedArtikel={this.state.selectedArtikel} />
                {resultUpdate}
                <div className="form-group">
                    <br />
                    <button className="btn-create" onClick={this.onCreateClicked}>Create Artikel</button><br /><br />
                </div>
            </div>
        );
    }
}

export default Artikel;