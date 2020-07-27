import axios from 'axios'

const getUser = async function () {
    let user = await axios.get("http://localhost:3000/User")
    return user
}
const createUser = async (form) => {
    let user = await axios.post("http://localhost:3000/User", form)
    return user
}
const updateUser = async (form) => {
    let user = await axios.put("http://localhost:3000/User/" + form.id_user, form)
    return user
}
const deleteUser = async (id) => {
    let user = await axios.delete("http://localhost:3000/User/" + id)
    return user
}
export { getUser,createUser,updateUser,deleteUser }