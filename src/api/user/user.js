import axios from 'axios'

const getUser = async function(){
    let user = await axios.get("http://localhost:3000/User")
    return user
}
export {getUser}