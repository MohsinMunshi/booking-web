import React,{useState} from 'react'
import {Container,TextField,Paper,Typography,Grid,Button} from '@material-ui/core/';
import styles from './styles'
import * as API from '../../api'

const initialState = {
    name: '',
    venue:'',
    seats:'',
    price:'',
    showTime:''
}
const NewShow = () => {
    const [formData, setformData] = useState(initialState)
    const classes = styles()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const {data} = await API.newShow(formData)
            console.log(data)
            if(data){
                document.getElementById("myForm").reset();
            }
        } catch (error) {
            console.log('Something Went Wrong')
        }
    }
    const handleChange = (e) => {
        setformData({...formData,[e.target.name]: e.target.value})
    }
    console.log(formData)
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
                            fullWidth label="Show Name" 
                            variant="outlined" 
                            onChange={handleChange}
                            name='name'
                        />
                        <TextField 
                            id="outlined-basic" 
                            fullWidth label="Vanue Details" 
                            variant="outlined" 
                            onChange={handleChange}
                            name='venue'
                        />
                        <TextField 
                            id="outlined-basic"  
                            fullWidth label="Total Seats" 
                            variant="outlined" 
                            onChange={handleChange}
                            name='seats'
                        />
                        <TextField 
                            id="outlined-basic" 
                            fullWidth label="Price Per Seat" 
                            variant="outlined" 
                            onChange={handleChange}
                            name='price'
                        />
                        <TextField
                                id="datetime-local"
                                label="Show Time & Date"
                                type="datetime-local"
                                defaultValue={"2021-06-29T10:30"}
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={handleChange}
                                name='showTime'
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

export default NewShow
