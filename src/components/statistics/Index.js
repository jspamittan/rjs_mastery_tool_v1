import { Box, Grid, Container } from '@mui/material'
import { useContext, useState } from 'react'
import { ToolContext } from '../../core/context/ToolContext'
import { DailyGraph } from './DailyGraph'
import { Overview } from './Overview'

export const Statistics = () => {
    const { statistics_state } = useContext(ToolContext)
    console.log(statistics_state);
    const [oprops] = useState([
        {name: 'templates', xs: 4, bgcolor: '#3d3d3d'},
        {name: 'tEmplates', xs: 4, bgcolor: 'success.main'},
        {name: 'contents', xs: 4, bgcolor: 'warning.main'},
        {name: 'contents', xs: 4, bgcolor: 'info.main'},
        {name: 'templates', xs: 4, bgcolor: 'warning.main'},
        {name: 'contents', xs: 4, bgcolor: 'secondary.main'}
    ])
    
    return (
        <Container>            
            <Grid container spacing={3}>
                {
                    statistics_state.overview.data.map((o, k) => {
                        let op = oprops.filter(op => op.name === o.name.toLowerCase())
                        if (op.length > 0) {
                            return <Overview key={k} overview={{...op[0], ...o, name: o.name.toLowerCase()}} />
                        } else{
                            return o
                        }
                    })
                }
            </Grid>
            <Box bgcolor="white" p={4} borderRadius={4} color="#black" mt={4} width={1300}>
                <DailyGraph />
            </Box>
        </Container>
    )
}