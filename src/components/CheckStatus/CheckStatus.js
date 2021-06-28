import React, {useState,useEffect} from 'react'
import {Container,Button,TextField,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@material-ui/core/';
import moment from 'moment'
import styles from './styles'
import * as API from '../../api'

const CheckStatus = ({location}) => {
    const classes = styles()
    const [email, setEmail] = useState('')
    const [bookings, setBookings] = useState([])
    const params = new URLSearchParams(location.search); 
    const mail = params.get('mail');

    const handleClick = async () => {
        const {data} = await API.getBookings(email)
        setBookings(data)
    }

    useEffect(() => {
      if(mail){
        setEmail(mail)
      }
    }, [mail])

    const handleCancel = async (booking) => {
      
      if(booking.bookingStatus === 'Cancelled'){
        alert('Ticket is already Cancelled')
        return
      }else{
        const update = {...booking,bookingStatus:"Cancelled"}
        const {data} = await API.updateBookings(update)
        if(data){
          alert("ticket Cancelled successfully")
          handleClick()
        }
      }
    }

    return (
        <>
        <Container  component="main" maxWidth="xs" className={classes.root}>
            <TextField 
                className={classes.textField}
                id="outlined-basic" 
                fullWidth 
                label="Enter your Email Id" 
                variant="outlined" 
                onChange={(e) => setEmail(e.target.value)}
                name='email'
                value={email}
            />
            <Button 
                type="submit" 
                fullWidth variant="contained" 
                color="primary" 
                onClick={handleClick}
                className={classes.submit}
            >
                Search
            </Button>
        </Container>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Show Name</TableCell>
              <TableCell align="center">Show Date</TableCell>
              <TableCell align="center">Booked Seats</TableCell>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="center">Current Status</TableCell>
              <TableCell align="center">Modify</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((row) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {row.shows.name}
                </TableCell>
                <TableCell align="center">{moment(row.shows.showTime).format('MMMM Do YYYY, h:mm:ss a')}</TableCell>
                <TableCell align="center">{row.bookedSeats.toString()}</TableCell>
                <TableCell align="center">{row.bookingAmount}</TableCell>
                <TableCell align="center">{row.bookingStatus}</TableCell>
                <TableCell align="center">{ ((new Date(row.shows.showTime) - new Date()) / 1000) > 3600 ? 
                  <Button fullWidth variant="contained" color="primary" onClick={() => handleCancel(row)}>Cancel</Button> 
                  : null
                  } 
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </>
    )
}

export default CheckStatus
