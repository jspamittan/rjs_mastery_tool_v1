import { BrowserRouter as Router, Link} from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack'
import FeedIcon from '@mui/icons-material/Feed'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

export const Poll = () => {

    return (
        <Container>
            <Grid container justifyContent="space-between"> 
                <Grid item> 
                    <Typography variant="button" fontSize={20}>
                        POLL 
                    </Typography>
                </Grid>          
                <Grid item>
                    <Stack spacing={2} direction="row">
                        <Router>
                        <Link to='/poll/templates' style={{textDecoration: 'none'}}>
                            <Button variant="outlined" startIcon={<FeedIcon/>}>
                                Templates
                            </Button>
                        </Link>
                        <Link to='/poll/contents' style={{textDecoration: 'none'}}>
                            <Button variant="outlined" startIcon={<ContentCopyIcon/>}>
                                Contents
                            </Button>
                        </Link>
                        </Router>
                    </Stack>
                </Grid>    
            </Grid>        
        </Container>
    )
}
