import axios from 'axios'

export default class EducationDegreeService {

    getAllEducationSchools() {
        return axios.get("http://localhost:8080/api/educationschools/getall")
    }

    getEducationSchoolById(id){
        return axios.get("http://localhost:8080/api/educationschools/getbyid?id=" + id)
    }
    
}