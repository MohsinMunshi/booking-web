import React,{useState} from 'react'
import {Container,Typography,Button} from '@material-ui/core/';
import { useHistory } from 'react-router-dom';
import moment from 'moment'
import styles from './styles'
import * as API from '../../api'

const ShowBooking = () => {

    let booking = JSON.parse(localStorage.getItem('bookshow'))
    const [sheets, setSheets] = useState(
        new Array(booking.seats)
        .fill(1)
        .map((data,index) => index + 1)
    )
    const [bookedSeats, setBookedSeats] = useState(booking.bookedSeats)   
    const [booked, setBooked] = useState([])
    const history = useHistory()
    const classes = styles()
    if(!booking){
        history.push('/')
    }

    const handleSubmit = async () => {
        if(booked.length > 0){
            const price = booking.price * booked.length
            const bookTicket = {
                userName:booking.username,
                userEmail:booking.email,
                showID:booking._id,
                bookedSeats:booked,
                bookingAmount:price
            }
            try {
                const ticket = await API.newBooking(bookTicket)
                console.log(ticket)
                alert(`Dear ${booking.username} Your Ticket is Succesfully booked.. Please Pay ${price} @ Counter`)
                localStorage.removeItem('bookshow')
                history.push(`/status?mail=${booking.email}`)
            } catch (error) {
                if (error.response.status === 400){
                    alert('Ticket Already Booked')
                }                
            }            
            
        }
        
    }

    const handleClick = (e,index) => { 
        const {target} = e;   
        const name = target.name;

        if(target.checked){
            setBooked((prvBooked) => [...prvBooked,name])
        }else{
            let newArray = booked.filter(e => e !== name);   
            console.log("Data : ", newArray)
            setBooked(newArray)
        }
    }
    return (
        <Container className={classes.root}>
            <Typography variant="h5">Show Name : {booking.name}</Typography>
            <Typography variant="h6" color="textSecondary">Show Time : {moment(booking.showTime).format('MMMM Do YYYY, h:mm:ss a')}</Typography>
            <Typography variant="h6" color="textSecondary">Show Time : {booking.price}/- INR</Typography>
            <Typography variant="h6" color="textSecondary">Available Sheets: </Typography>
            {sheets.map((data,index) => {
                return (<from>
                    {data === 11 ? <br/> : null}
                    {bookedSeats.indexOf(data) === -1 ? (<label className={classes.list} ><span className={classes.items}>{data} </span>
                    <input
                        className={classes.checkbox}
                        name={data}
                        type="checkbox"
                        onChange={(e) => handleClick(e,index)} />
                    </label>) : (<label className={classes.list} ><span className={classes.items}>{data} </span>
                    <input
                        className={classes.checkbox}
                        name={data}
                        type="checkbox"
                        disabled
                        checked
                        onChange={(e) => handleClick(e,index)} />
                    </label>)}
                </from>)
                }
            )}
            <Typography variant="h6" color="textSecondary"></Typography>
            <Button onClick={handleSubmit} type="submit" variant="contained" color="primary" >Book Show</Button>
        </Container>
    )
}

export default ShowBooking
