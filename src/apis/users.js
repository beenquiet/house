import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8000/'

export const loginRes=(params)=>{
   return axios.post('login',params)
}