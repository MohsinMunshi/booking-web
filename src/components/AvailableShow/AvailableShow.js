import React, {useState, useEffect} from 'react'
import {Container, CircularProgress, Grid} from '@material-ui/core/';
import { useHistory } from 'react-router';

import * as API from '../../api'
import ShowDetails from './ShowDetails'
import styles from './style'

const AvailableShow = () => {
    const history = useHistory()
    const classes = styles();

    const [shows, setShows] = useState({data: []})
    const getShow = async () => {
        const {data} = await API.getShows()
        setShows(data)
    }
    
    useEffect(() => {
        getShow()
    }, [])

    const handleClick = (data) => {
        console.log(data)
        localStorage.setItem('bookshow', JSON.stringify(data))
        history.push('/user')
    }

    return(!shows ? <CircularProgress/>: (
        <Container className={
            classes.root
        }>
            <Grid container
                spacing={3}>
                {
                shows.data.map(data => <ShowDetails data={data}
                    handleClick={handleClick}/>)
            } </Grid>
        </Container>
    ))
}

export default AvailableShow
