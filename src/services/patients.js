import Api from "./api";

const patientService = {};

patientService.getPatients = () => {
    return Api.get("/patient/")
    .then(res => res.data)
    .catch(err => {throw err})
}

patientService.postPatients = (data) => {
    return Api.post("/patient/crear", data)
    .then(res => res.data)
    .catch(err => {throw err})
}

patientService.getPatientsById = (id) => {
    return Api.get(`/patient/${id}`)
    .then(res => res.data)
    .catch(err => {throw err})
}

patientService.updatePatientsById = () => {
    return Api.put(`/patient/`)
    .then(res => res.data)
    .catch(err => {throw err})
}

patientService.deletePatientsById = (id) => {
    return Api.delete(`/patient/${id}`)
    .then(res => res.data)
    .catch(err => {throw err})
}

export default patientService;