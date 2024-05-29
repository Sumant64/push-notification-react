import axios from "axios"

const config = {
    headers: {
        'Content-Type': 'application/json',
    }
}

export const sendMultipleUser = (payload) => {
    return axios.post(`http://192.168.156.242:5000/send-multiple`, payload, config);
}