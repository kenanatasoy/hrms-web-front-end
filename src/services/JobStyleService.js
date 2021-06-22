import axios from 'axios'

export default class JobStyleService {

    getJobStyles() {
        return axios.get("http://localhost:8080/api/jobstyles/getall")
    }

    getJobStyleById(id){
        return axios.get("http://localhost:8080/api/jobstyles/getbyid?id=" + id)
    }
    
}