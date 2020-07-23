// import axios from 'axios'


// const getArtikel = async function(){
//     let artikel = await axios.get("http://localhost:3000/Artikel")
//     return artikel
// }
// const createArtikel = async (form)=>{
//     const artikel = await fetch("http://localhost:3000/Artikel", {
//         method:"POST",
//         headers:{
//             Accept:'application/json','Content-Type':'application/json'
//         },
//         body : JSON.stringify(form)
//     })
//     return await artikel.json()
// }
// const updateArtikel = async (form)=>{
//     console.log("update",form);
//     const artikel = await fetch("http://localhost:3000/Artikel/"+ form.id_artikel, {
//         method:"PUT",
//         headers:{
//             Accept:'application/json','Content-Type':'application/json'
//         },
//         body : JSON.stringify(form)
//     })
//     return await artikel.json()
// }
// const deleteArtikel = async (id)=>{
//     const artikel = await fetch("http://localhost:3000/Artikel/"+ id, {
//         method:"DELETE",
//         headers:{
//             Accept:'application/json','Content-Type':'application/json'
//         },
//     })
//     return  artikel
// }

// export {getArtikel,createArtikel,updateArtikel,deleteArtikel}

import axios from 'axios'


const getArtikel = async function(){
    let artikel = await axios.get("http://localhost:3000/Artikel")
    return artikel
}
const createArtikel = async (form)=>{
    let artikel = await axios.post("http://localhost:3000/Artikel",form)
    return artikel
}
const updateArtikel = async (form)=>{
    let artikel = await axios.put("http://localhost:3000/Artikel/"+form.id_artikel,form)
    return artikel
}
const deleteArtikel = async (id)=>{
    let artikel = await axios.delete("http://localhost:3000/Artikel/"+id)
    return artikel
}

export {getArtikel,createArtikel,updateArtikel,deleteArtikel}

