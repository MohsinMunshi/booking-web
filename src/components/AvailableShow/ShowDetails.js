import React from 'react'
import {Card,CardHeader,Button,CardContent,CardActions,Typography,Grid} from '@material-ui/core/';
import moment from 'moment'

import 'reactjs-popup/dist/index.css';
import styles from './style'

const ShowDetails = ({data,handleClick}) => {  
    const classes = styles();
    
    return (
        <Grid item xs={3}>
            <Card key ={data._id}className={classes.paper} elevation={3}>
                <CardHeader
                    title={data.name}
                    subheader={moment(data.showTime).format('MMMM Do YYYY, h:mm:ss a')}
                />
                <CardContent>
                    <Typography  className={classes.text} variant="body2" color="textPrimary" component="p">
                    {`Show Venue : ${data.venue}`}
                    </Typography>
                    <br/>
                    <Typography variant="body2" color="textPrimary" component="p">
                    {`Ticket Price : ${data.price}`}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Button onClick={() => handleClick(data)} className={classes.submit} variant="contained" color="primary">Book ticket</Button>
                </CardActions>
            </Card>
        </Grid>
        
    )
}

export default ShowDetails
