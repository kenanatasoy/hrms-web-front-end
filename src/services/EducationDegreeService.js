import axios from 'axios'

export default class EducationDegreeService {

    getAllEducationDegrees() {
        return axios.get("http://localhost:8080/api/educationdegrees/getall")
    }

    getEducationDegreeById(id){
        return axios.get("http://localhost:8080/api/educationdegrees/getbyid?id=" + id)
    }
    
}