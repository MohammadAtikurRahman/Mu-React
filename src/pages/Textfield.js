import React from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({

    field: {
       
        marginTop: 20,
        marginBottom: 20,
        display: 'block'

    }
 
});
export default function Notes() {
 
     const classes = useStyles()
 
    return (
    <Container>

        <Typography variant="h5" color="initial"
        
       pt={2}
        
        >
            Create a Note
        </Typography>
         <form noValidate autoComplete="off">

       
           <TextField
              className = {classes.field}
             label="Note Title"
             variant="outlined"
             color= "secondary"
             fullWidth
             required
         
             
           />

           <Button variant="contained" color="success">
             Send
           </Button>

      </form>

    </Container>
  )
}
