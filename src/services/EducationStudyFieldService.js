import axios from 'axios'

export default class EducationStudyFieldService {

    getAllEducationStudyFields() {
        return axios.get("http://localhost:8080/api/educationstudyfields/getall")
    }

    getEducationStudyFieldsByFacultyIdAndActiveTrue(){
        return axios.get("http://localhost:8080/api/educationstudyfields/getByFacultyIdAndActiveTrue?facultyId=" + facultyId)
    }

    getEducationStudyFieldById(id){
        return axios.get("http://localhost:8080/api/educationstudyfields/getbyid?id=" + id)
    }
    
}