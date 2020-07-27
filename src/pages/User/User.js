import { createUser, getUser, deleteUser, updateUser } from '../../api/user/user';
import UserList from './UserList'
import swal from 'sweetalert';
import UpdateUser from './UpdateUser';
import DetailUser from './DetailUser';
import CreateUser from './CreateUser';
import './User.css'
import React, { useState, useEffect } from 'react';

const User =()=> {
    const [user,setUser]= useState([])
    const [id_user,setidUser]= useState("")
    const [username,setUsername]= useState("")
    const [notelp,setNotelp]= useState("")
    const [address,setAddress]= useState("")
    const [gender,setidGender]= useState("")
    const [message,setMesaage]= useState("")
    const [showUpdate,setShowUpdate]= useState(false)
    const [showDetail,setShowDetail]= useState(false)
    const [isCreated,setisCreated]= useState(false)
    const [selectedUser,setSelectedUser]= useState({})
    const [isUpdated,setisUpdated]= useState(false)
    const [isLoading,setisLoading]= useState(false)
    
    useEffect(() => {
        loadData()
    },[])

    const loadData = () => {
        getUser().then((user) => {
            setUser(user.data.data)
            setMesaage(user.data.message)
        }).catch((error) => {
            alert(error)
        })
    }
   
    const addNewUser = (id_user, username, notelp, address, gender) => {
        createUser({
            id_user: id_user,
            username: username,
            notelp: notelp,
            address: address,
            gender: gender
        }).then(() => {
            this.loadData()
        })
    }
    const onCreateClicked = () => {
        setisCreated(!isCreated)
    }
    const showUpdateList = (user) => {
        setShowUpdate(!showUpdate)
        setSelectedUser({ ...user })
    }
    const hideUpdate = () => {
        setShowUpdate(!showUpdate)
        setSelectedUser({})
    }
   const updateUserList = (username, notelp, address, gender,id_user) => {
        swal({
            title: "Are you sure will update the selected data?",
            text: "",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willUpdate) => {
                if (willUpdate) {
                    updateUser({
                        username:username,
                        notelp:notelp,
                        address:address,
                        gender:gender,
                        id_user:id_user
                    })
                        .then(() => {
                            loadData()
                        })
                    swal("Your data has been updated!", {
                        icon: "success",
                    });
                } else {
                    swal("Your data is not updated!");
                }
            });

        setisUpdated(!isUpdated)
    }
   const deleteUserList = (id_user) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteUser(id_user)
                        .then(() => {
                            loadData()
                        })
                    swal("Your data has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your imaginary data is safe!");
                }
            });

    }
    const showDetails = (user) => {
        setShowDetail(!showDetail)
        setSelectedUser({ ...user })
    }
    const hideDetails = () => {
        setShowDetail(!showDetail)
        setSelectedUser({})
    }

        let resultUpdate
        if (showUpdate) {
            resultUpdate = (<UpdateUser show={showUpdate} onHide={hideUpdate}
                selectedUser={selectedUser} update={updateUserList} />)
        }
        if (isCreated) {
            return (<CreateUser addNewUser={addNewUser} id_user={id_user}
               username={username} notelp={notelp} address={address}
                gender={gender} />)
        }

        return (
            <div>
               <UserList message={message} 
                    deleteUser={deleteUserList} showDetail={showDetails} 
                    showUpdate={showUpdateList}
                    isLoading={isLoading} user={user}/>
                <DetailUser show={showDetail} onHide={hideDetails}
                    selectedUser={selectedUser} />
                {resultUpdate}
                <div className="form-group">
                    <br />
                    <button className="btn-create" onClick={onCreateClicked}>Create User</button><br /><br />
                </div>
            </div>
        );
    }
export default User;