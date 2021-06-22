import axios from 'axios'

export default class JobSeekerCVEducationService {

    getAllJobSeekerCVEducationsByJobSeekerCVIdOrderByGraduationDateDesc(jobSeekerCVId){
        return axios.get("http://localhost:8080/api/jobseekercveducations/getAllByJobSeekerCVIdOrderByGraduationDateDesc?jobSeekerCVId=" + jobSeekerCVId)
    }
    
    getJobSeekerCVEducationById(id){
        return axios.get("http://localhost:8080/api/jobseekercveducations/getbyid?id=" + id)
    }

    postJobSeekerCVEducation(jobSeekerCVEducation){
        return axios.post("http://localhost:8080/api/jobseekercveducations/add", jobSeekerCVEducation)
    }

}