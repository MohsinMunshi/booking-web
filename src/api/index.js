import axios from 'axios'

const API = axios.create({baseURL:'http://localhost:5000/'})

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