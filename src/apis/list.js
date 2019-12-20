
import axios from 'axios'


axios.defaults.baseURL = 'http://localhost:8000/'
export const getLists = () => axios.get('getHouseList')

