import axios from 'axios'

export default class JobSeekerCVSkillService {

    getJobSeekerCVSkills() {
        return axios.get("http://localhost:8080/api/jobseekercvskills/getall")
    }

    getById(id){
        return axios.get("http://localhost:8080/api/jobseekercvskills/getbyid?id=" + id)
    }

    postJobSeekerCVSkill(jobSeekerCVSkill){
        return axios.get("http://localhost:8080/api/jobseekercvskills/add", jobSeekerCVSkill)
    }
    
}
