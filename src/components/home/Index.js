import { useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { Statistics } from '../statistics/Index';



export const Home = () => {

    useEffect(() => {

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <Container m-4>
            <Box display="flex" style={{fontFamily:'Copperplate Gothic', fontSize:'25px', color:'black', textAlign:'center', paddingTop:'5px', position: 'relative'}} >
               <b >Home / Dashboard </b> 
            </Box>
            <hr color="black" size="3" width="130%"></hr>
            <br></br>
            <br></br>
            <Container>
            <Statistics  />
             {/* <Box sx={{ bgcolor: '#116ca8', height: '50vh', width: '150vh', borderRadius: '25px'}} /> */}
            </Container>
        </Container>
    )
}
