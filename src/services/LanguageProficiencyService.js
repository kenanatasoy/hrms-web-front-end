import axios from 'axios'

export default class LanguageProficiencyService {

    getLanguageProficiencies() {
        return axios.get("http://localhost:8080/api/languageproficiencies/getall")
    }

    getLanguageProficiencyById(id){
        return axios.get("http://localhost:8080/api/languageproficiencies/getbyid?id=" + id)
    }
    
}
