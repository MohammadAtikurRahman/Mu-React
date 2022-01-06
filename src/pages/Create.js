import React from 'react'
import  Typography  from '@mui/material/Typography'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';

import Icon from '@mui/material/Icon';

import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';


import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  btn: {
    background: 'violet',
     fontSize: 40 ,
     '&:hover': {
       backgroundColor: 'greenyellow'
     }
   
  },
  title: {

      textDecoration: 'underline',
      marginBottom: 20


  }
});
export default function Create() {

  const classes = useStyles()

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

       className={classes.title}
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

        <Button 

        className = {classes.btn}
        
        
        variant="contained">

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
        
           
      

      
      
      <AcUnitOutlinedIcon/>
      <AcUnitOutlinedIcon  color="secondary" fontSize="large" />
      <AcUnitOutlinedIcon  color="secondary" fontSize="small" />

       <Button variant="contained"
         

         startIcon={ <SendIcon/> }
         endIcon={ <KeyboardArrowRightIcon/>  }
       
       >
          Submit

       </Button>
   
         <Button 

        
         variant="contained" 
         color="info"
         
         
         >


           CustomCSS 


         </Button>
   

    </Container>
  )
}
