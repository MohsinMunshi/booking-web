import React, {useState} from 'react'
import {Container,Typography,Button,TextField,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@material-ui/core/';
import moment from 'moment'
import styles from './styles'
import * as API from '../../api'

const CheckStatus = () => {
    const classes = styles()
    const [email, setEmail] = useState('')
    const [bookings, setBookings] = useState([])
    const handleClick = async () => {
        const {data} = await API.getBookings(email)
        setBookings(data)
    }
    console.log(bookings)
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
              <TableCell align="center">Cancel</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((row) => (
              <TableRow key={row.shows.name}>
                <TableCell component="th" scope="row">
                  {row.shows.name}
                </TableCell>
                <TableCell align="center">{moment(row.shows.showTime).format('MMMM Do YYYY, h:mm:ss a')}</TableCell>
                <TableCell align="center">{row.bookedSeats.toString()}</TableCell>
                <TableCell align="center">{row.bookingAmount}</TableCell>
                <TableCell align="center">{row.bookingStatus}</TableCell>
                <TableCell align="center"><Button fullWidth variant="contained" color="primary" >Cancel</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </>
    )
}

export default CheckStatus
