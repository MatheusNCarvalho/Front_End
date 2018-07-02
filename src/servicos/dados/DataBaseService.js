import axios from 'axios';
import interceptors from './InterceptorsServices'
// let token = localStorage.getItem('Token')

let token = '';


const HTTP = axios.create({
  baseURL: 'http://192.168.2.106:56810/',
  headers: {
    'token': token
  }

})

interceptors.main(HTTP)

export default HTTP

