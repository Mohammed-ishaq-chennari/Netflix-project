import axios from "axios";
import {baseUrl} from './constansts/Constant'

const instance = axios.create({
    baseURL: baseUrl,
})

export default instance