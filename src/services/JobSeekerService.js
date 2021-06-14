import axios from 'axios'

export default class JobSeekerService {
    getJobSekeers() {
        return axios.get("http://localhost:8080/api/jobseekers/getall")
    }
}