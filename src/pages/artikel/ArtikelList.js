import React from 'react'
import './Artikel.css'
import { Table } from 'react-bootstrap'
import LoadingPage from '../../components/LoadingPage'

const ArtikelList = (props) => {
    const { isLoading, showDetail, artikel, message, showUpdate, deleteArtikel } = props;
    if (isLoading) {
        return (<LoadingPage />);
    }
    let allResult = artikel.map((data) =>
        <tr key={data.id_artikel} className="table-danger" style={{ color: "black" }}>
            <td>{data.id_user}</td>
            <td>{data.id_artikel}</td>
            <td>{data.user_name}</td>
            <td>{data.title}</td>
            <td>{data.category_name}</td>
            <td>{data.description}</td>
            <td>{data.date}</td>
            <td><strong>{message}</strong></td>
            <td>
                <button className="btn-detail" onClick={() => showDetail(data)}>Detail</button>
                <button className="btn-update" onClick={() => showUpdate(data)}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" />
                    <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" />
                </svg></button>
                <button className="btn-delete" onClick={() => deleteArtikel(data.id_artikel)}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                </svg></button>
            </td>
        </tr >)
    return (
        <div>
            <h3>Data</h3>
            <div>
                <Table striped bordered hover size="sm" variant="dark" style={{ marginLeft: "100px", width: "90%" }}>
                    <thead>
                        <tr>
                            <th>ID User</th>
                            <th>ID Artikel</th>
                            <th>Username</th>
                            <th>Title</th>
                            <th>Category Name</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Message</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allResult}
                    </tbody>
                </Table>
            </div>

        </div>
    );
}


export default ArtikelList;