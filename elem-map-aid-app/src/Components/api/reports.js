import axios from "axios";
const serverUrl =""; 
export default axios.create({
    baseURL:serverUrl
})
