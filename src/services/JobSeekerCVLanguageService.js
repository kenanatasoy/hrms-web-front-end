import axios from 'axios'

export default class JobSeekerCVLanguageService {

    getJobSeekerCVLanguages() {
        return axios.get("http://localhost:8080/api/jobseekercvlanguages/getJobSeekerCVLanguagesGetDtos")
    }

    getJobSeekerCVLanguageById(id){
        return axios.get("http://localhost:8080/api/jobseekercvlanguages/getJobSeekerCVLanguagesGetDtoById?id=" + id)
    }
    
    postJobSeekerCVLanguage(jobSeekerCVLanguage){
        return axios.post("http://localhost:8080/api/jobseekercvlanguages/add", jobSeekerCVLanguage)
    }
    
    deleteJobSeekerCVLanguageById(id){
        return axios.delete("http://localhost:8080/api/jobseekercvlanguages/deletebyid?jobSeekerCVLanguageId=" + id)
    }
}