import axios from 'axios'

export default class JobSeekerService {

    getJobSeekers() {
        return axios.get("http://localhost:8080/api/jobseekers/getall")
    }

    getJobSeekerById(id){
        return axios.get("http://localhost:8080/api/jobseekers/getbyid?id=" + id)
    }
    
}