import { BrowserRouter as Router, Link} from 'react-router-dom';
import { Overview } from './Overview'
import { Container, Grid, Button, Typography, Stack} from '@mui/material';
import FeedIcon from '@mui/icons-material/Feed';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PollsTemplate from './PollsTemplate'

export const Navigation = () =>{
    return (
        <Grid container justifyContent="space-between" mb={3}> 
            <Grid item> 
                <Typography variant="button" fontSize={20}>
                    POLL 
                </Typography>
            </Grid>          

            <Grid item>
                <Stack spacing={2} direction="row">
                    <Link to='/templates' style={{textDecoration: 'none'}}>
                        <Button variant="outlined" startIcon={<FeedIcon/>}>
                            Templates
                        </Button>
                    </Link>
                    <Link to='/contents' style={{textDecoration: 'none'}}>
                        <Button variant="outlined" startIcon={<ContentCopyIcon/>}>
                            Contents
                        </Button>
                    </Link>
                </Stack>
            </Grid>    
        </Grid>        
    )
}

export const Templates = () => {
    return (
        <Container>
            <Container maxWidth="xl">
                <Navigation />   
                    
                <Grid container align="center">
                    <Overview />
                    <PollsTemplate /> 
                </Grid>
            </Container>
        </Container>
    )
}

export const Contents = () => {
    return (
        <Container>
            <Container maxWidth="xl">
                <Navigation />  
            </Container>
        </Container>
    )
}

