import axios from 'axios'

export default class JobAdvertService {
    
    getJobAdvertsByActiveTrue(){
        return axios.get("http://localhost:8080/api/jobadverts/getConfirmedJobAdvertDtosByActiveTrue")
    }

    getJobAdvertsByPublishedDateTimeAndActiveTrue(){
        return axios.get("http://localhost:8080/api/jobadverts/getConfirmedJobAdvertDtosByPublishedDateTimeAndActiveTrue")
    }

    getJobAdvertsByEmployerIdAndActiveTrue(employerId){
        return axios.get("http://localhost:8080/api/jobadverts/getConfirmedJobAdvertDtosByEmployerIdAndActiveTrue?employerId=" + employerId)
    }

    getJobAdvertByIdAndActiveTrue(id) {
        return axios.get("http://localhost:8080/api/jobadverts/getConfirmedJobAdvertDtoByIdAndActiveTrue?jobAdvertId=" + id)
    }

    postJobAdvert(jobAdvert){
        return axios.post("http://localhost:8080/api/jobadverts/addjobadvertdto", jobAdvert)
    }

    toggleJobAdvertActivePassive(isActivated, jobAdvertId){
        return axios.post("http://localhost:8080/api/jobadverts/toggleJobAdvertActivePassive?isActivated=" + isActivated + "&jobAdvertId=" + jobAdvertId)
    }

}
