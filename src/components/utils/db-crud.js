import axios from "axios";

const urlUser = "http://localhost:6969/users"
const urlAbsen = "http://localhost:6969/absensi"

const accessDb = async (requestData, method, url) => {
    return await axios({
        method: method,
        url:url,
        data: requestData
    })
}

export const getUsers = () => accessDb(null, "GET", urlUser)

export const loginUser = (nip, password) => {
    const requestData = {
        nip: nip,
        password: password
    }
    return accessDb(requestData, "POST", (urlUser + "/login"))
}

export const registerUser = (nip, name, password) => {
    const requestData = {
        nip: nip,
        nama: name,
        password: password
    }
    return accessDb(requestData, "POST", (urlUser + "/register"))
}

export const editUser = (nip, user) => {
    const requestData = {
        nip: localStorage.getItem('nip'),
        nama: user.nama? user.nama : localStorage.getItem('nama'),
        password: user.password,
        passwordNew: user.passwordNew
    }
    return accessDb(requestData, "PUT", urlUser)
}

export const getAbsensi = () => accessDb(null, "GET", urlAbsen)

export const checkInAbsensi = (nip) => {
    const requestData = { nip: nip }

    return accessDb(requestData, "POST", (urlAbsen + "/checkin"))
}

export const checkOutAbsensi = (nip) => {
    const requestData = { nip: nip }

    return accessDb(requestData, "POST", (urlAbsen + "/checkout"))
}