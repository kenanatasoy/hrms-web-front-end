import axios from 'axios'

export default class LanguageService {

    getLanguages() {
        return axios.get("http://localhost:8080/api/languages/getall")
    }

    getLanguageById(id){
        return axios.get("http://localhost:8080/api/languages/getbyid?id=" + id)
    }
    
}