import React ,{ useState } from 'react'
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
     const [title,setTitle] =useState('')
     const [details,setDetails] =useState('')
     const [titleError,setTitleError] =useState('false')
     const [detailsError,setDetailsError] =useState('false')



      const handleSubmit = (e) => {
       
       
         e.preventDefault();
          setTitleError(false)
          setDetailsError(false)

          if(title == ''){

            setTitleError(true)
          }

          if(details == ''){

            setDetailsError(true)
          }
          if(title && details){

            console.log(title,details)
          }
      }
 
    return (
    <Container>

        <Typography variant="h5" color="initial"  pt={2}>
            Create a Note
        </Typography>


         <form noValidate autoComplete="off" onSubmit={handleSubmit} >
           <TextField
             onChange={(e) => setTitle(e.target.value)}

                
            
             className={classes.field}
             label="Note Title"
             variant="outlined"
             color= "secondary"
             fullWidth
             required
             error={titleError}
           />
              <TextField

               onChange={(e) => setDetails(e.target.value)}
             className = {classes.field}
             label="Note Title"
             variant="outlined"
             color= "secondary"
             multiline
             rows={4}
             fullWidth
             required
                error={detailsError}
           />
            

           <Button 
           type= "submit"
           variant="contained" 
           color="success">
             Send
           </Button>

      </form>

    </Container>
  )
}
