import axios from 'axios'

export default class JobAdvertService {
    getJobAdverts() {
        return axios.get("http://localhost:8080/api/jobadverts/getJobAdvertDtosByPublishedDateTimeAndActiveTrue")
    }

    getByJobAdvertId(id) {
        return axios.get("http://localhost:8080/api/jobadverts/getJobAdvertDtoByIdAndActiveTrue?jobAdvertId=" + id)
    }

}
