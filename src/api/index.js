import axios from 'axios'

const API = axios.create({baseURL:'http://127.0.0.1:8000/api/'})

export const newShow = async (FormData) => {
    return await API.post('/show/newshow', FormData)
}
export const newBooking = async (FormData) => {
    return await API.post('/booking/newbooking', FormData)
}
export const getShows = async() =>{
    return await API.get('/show')
}
export const getBookings = async(email) =>{
    return await API.get(`/booking/search/${email}`)
}
export const updateBookings = async(data) =>{
    return await API.post(`/booking/update/`,data)
}