import axios from 'axios'

export default class EducationFacultyService {

    getAllEducationFaculties() {
        return axios.get("http://localhost:8080/api/educationfaculties/getall")
    }

    getAllEducationFacultiesByUniversityIdAndActiveTrue(schoolId){
        return axios.get("http://localhost:8080/api/getAllByUniversityIdAndActiveTrue?schoolId=" + schoolId)
    }

    getEducationFacultyById(id){
        return axios.get("http://localhost:8080/api/educationfaculties/getbyid?id=" + id)
    }
    
}