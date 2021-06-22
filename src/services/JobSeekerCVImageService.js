import axios from 'axios'

export default class JobSeekerCVImageService {

    getJobSeekerCVImage(id){
        return axios.get("http://localhost:8080/api/jobseekercvimages/getbyid?id=" + id)
    }

    postJobSeekerCVImage(jobSeekerCVImage) {
        return axios.post("http://localhost:8080/api/jobseekercvimages/uploadimage", jobSeekerCVImage)
    }

}