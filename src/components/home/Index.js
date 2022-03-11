import { useEffect } from 'react';
import { Box, Container } from '@mui/material';


export const Home = () => {

    useEffect(() => {

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <Container m-4>
            <Box display="flex" style={{fontFamily:'Copperplate Gothic', fontSize:'25px', color:'black', textAlign:'center', paddingTop:'5px', position: 'relative'}} >
               <b >Dashboard / Home Feature</b> 
            </Box>
            <Container>
             <Box sx={{ bgcolor: '#116ca8', height: '50vh', width: '150vh', borderRadius: '25px'}} />
            </Container>
        </Container>
    )
}
