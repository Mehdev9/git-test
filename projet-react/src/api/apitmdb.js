import axios from "axios";

const apitmdb = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default apitmdb

apitmdb.interceptors.request.use( (request) => {
    request.headers["Authorization"] = "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTMzYTNhNjM1ZTdmYjU5ZDIxMTlmYWNkYWM4ZGY5OSIsInN1YiI6IjY2MmY2ZDAzMzU4MTFkMDEyOGU4YjgxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9eT2OldxoBPBnv1Vkv_FfqM-EU_eemeAbzGS0rpbeMU"
    return request
})