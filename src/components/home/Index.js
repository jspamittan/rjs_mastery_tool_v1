import { useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { Statistics } from '../statistics/Index';

export const Home = () => {

    useEffect(() => {

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <Container>
            <Container>
                <Box display="flex" style={{fontFamily:'Copperplate Gothic', fontSize:'25px', color:'black', textAlign:'center', paddingTop:'5px'}} >
                <b >Home / Dashboard </b> 
                </Box>
                <Statistics  />
            </Container>
        </Container>
    )
}
