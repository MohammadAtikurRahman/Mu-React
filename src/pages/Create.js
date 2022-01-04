import React from 'react'
import  Typography  from '@mui/material/Typography'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';


export default function Create() {
  return (
    <Container>

       <Typography 
       variant="h1" 
       color="primary"
       align = "center"
       
       >

            Future Innovation

       </Typography>
        <Typography 
       variant="h2" 
       color="secondary"
       align = "center"
       
       >

           Living with the techonology

       </Typography>


      <Typography 
         variant="h6" 
         color="textSecondary"
         component="h2"
         align="center"
         gutterBottom
    
       
       >

        For best software development

       </Typography>

        <Button variant="contained">

           Default
        </Button>
         
         <Button variant="contained" color="secondary" >

          Primary

         </Button>
         <Button variant="contained" disabled >  
           
           disabled

         </Button>
    
       <Button
        
        variant="contained"
        color="success"
        href="#"

       
       
       >
      link
       </Button>



         <Button color="warning" >
           Text Button

         </Button>
         <Button color="primary" disabled > disabled button</Button>

        <Button variant="contained" disableElevation>
          Disable elevation
        </Button>
        
        <Button variant="outlined" color="success" >Primary</Button>


       <ButtonGroup  color="primary"  variant="contained">
         <Button> one</Button>
         <Button> two </Button>
          <Button> three </Button>
         
       </ButtonGroup>
        

        <Button

          onClick={ () => console.log('You clicked')

          }



         type="submit"
         color="success"
         variant="contained"
         disableElevation
        
        
        >


          submit
        </Button>




    </Container>
  )
}
