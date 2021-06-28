import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import {Container} from '@material-ui/core'

import NavBar from './components/NavBar/NavBar'
import NewShow from './components/NewShow/NewShow'
import AvailableShow from './components/AvailableShow/AvailableShow'
import UserDetails from './components/UserDetails/UserDetails'
import ShowBooking from './components/ShowBooking/ShowBooking'
import CheckStatus from './components/CheckStatus/CheckStatus'

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Container>
          <Route path='/newshow' exact component={NewShow} />
          <Route path='/' exact component={AvailableShow} />
          <Route path='/user' exact component={UserDetails} />
          <Route path='/booking' exact component={ShowBooking} />
          <Route path='/status' exact component={CheckStatus} />
        </Container>
    </BrowserRouter>
  );
}

export default App;
