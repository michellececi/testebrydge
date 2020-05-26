import axios from 'axios'

const api = axios.create({
    baseURL:'localhost/api/pagto'
})

export default api