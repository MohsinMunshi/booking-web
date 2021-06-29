import React, {useState} from 'react'
import {Container,TextField,Paper,Typography,Grid,Button} from '@material-ui/core/';
import styles from './styles'
import { useHistory } from 'react-router-dom';
import validator from 'validator'

const UserDetails = () => {
    let booking = JSON.parse(localStorage.getItem('bookshow'))
    const history = useHistory()
    const classes = styles()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    if(!booking){
        history.push('/')
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!name&&!email){
            alert('Enter Name and Email ')
        }else{
            if (validator.isEmail(email)) {
                booking = {...booking,username:name,email}
                localStorage.setItem('bookshow', JSON.stringify(booking))
                history.push('/booking')
              } else {
                alert('Enter valid Email!')
              }
            }
    }
    return (
        <Container  component="main" maxWidth="xs" className={classes.root}>
            <Paper className={classes.paper} elevation={3}>
                <Typography variant="h5">
                    Add Show Data
                </Typography>
                <form id="myForm" className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit} >
                    <Grid container spacing={2}>
                        <TextField 
                            id="outlined-basic" 
                            fullWidth label="Your Full Name" 
                            variant="outlined" 
                            onChange={(e) => setName(e.target.value)}
                            name='name'
                            required
                        />
                        <TextField 
                            id="outlined-basic" 
                            fullWidth label="Email Id" 
                            variant="outlined" 
                            onChange={(e) => setEmail(e.target.value)}
                            name='email'
                            type='email'
                            required
                        />
                        <Button 
                            type="submit" 
                            fullWidth variant="contained" 
                            color="primary" 
                            className={classes.submit}
                        >
                            Submit
                        </Button>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default UserDetails
