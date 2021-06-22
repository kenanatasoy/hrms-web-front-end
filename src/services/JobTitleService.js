import axios from 'axios'

export default class JobTitleService {

    getJobTitles() {
        return axios.get("http://localhost:8080/api/jobtitles/getall")
    }

    getJobTitleById(id){
        return axios.get("http://localhost:8080/api/jobtitles/getbyid?id=" + id)
    }
    
    postJobTitle(jobTitle){
        return axios.post("http://localhost:8080/api/jobtitles/add", jobTitle)
    }
}