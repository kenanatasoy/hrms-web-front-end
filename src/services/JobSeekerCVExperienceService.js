import axios from 'axios'

export default class JobSeekerCVExperienceService {
    
    getAllByJobSeekerCVIdOrderByEndingDateDesc(jobSeekerCVId){
        return axios.get("http://localhost:8080/api/jobseekercvexperiences/getAllByJobSeekerCVIdOrderByEndingDateDesc?jobSeekerCVId=" + jobSeekerCVId)
    }

    getJobSeekerCVExperienceById(id){
        return axios.get("http://localhost:8080/api/jobseekercvexperiences/getbyid?id=" + id)
    }

    postJobSeekerCVExperience(jobSeekerCVExperience){
        return axios.post("http://localhost:8080/api/jobseekercvexperiences/add", jobSeekerCVExperience)
    }

}