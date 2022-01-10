import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import Textfield from './pages/Textfield'

import { createTheme , ThemeProvider }  from '@mui/material/styles'
import { purple } from '@mui/material/colors'
import Typography from '@mui/material/Typography'


const theme = createTheme({
  
  palette: {

    primary:{

      main: '#fefefe'
    },

    secondary: purple

      
    
  },
  typography:{
     fontFamily: 'Quicksand',
     fontWeightLight: 400,
     fontWeightRegular: 500,
     fontWeightMedium: 600,
     fontWeightBold: 700


  }

})

function App() {
  return (


      <ThemeProvider theme={theme}>

     
    <Router>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
           <Route path="/textfield" >

              <Textfield/>
           </Route>


      </Switch>
    </Router>

     </ThemeProvider>
  );
}

export default App;
















































































































































































































































































































