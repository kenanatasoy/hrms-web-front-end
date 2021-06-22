import axios from 'axios'

export default class JobSeekerCVService {
    
    getJobSeekerCVs() {
        return axios.get("http://localhost:8080/api/jobseekercvs/getall")
    }

    getJobSeekerCVById(id){
        return axios.get("http://localhost:8080/api/jobseekercvs/getbyid?id=" + id)
    }

    getJobSeekerCVByJobSeekerId(jobSeekerId){
        return axios.get("http://localhost:8080/api/jobseekercvs/getByJobSeekerId?jobSeekerId=" + jobSeekerId)
    }

    postJobSeekerCV(jobSeekerCV){
        return axios.post("http://localhost:8080/api/jobseekercvs/add", jobSeekerCV)
    }

}
