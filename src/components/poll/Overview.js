import { BrowserRouter as Route, Link } from 'react-router-dom'
import { Grid, Button, Card} from '@mui/material'

export const Overview = () => {
  
  return (
    <>
        <Grid item md={3} display="flex">
            <Card sx={{ width:500, maxWidth: 500, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', m:1, borderRadius: 3,}}>
                <Link to='/templates/new' style={{textDecoration:"none"}}>
                    <Button variant="contained" color="success" >
                        Create Template
                    </Button>
                </Link>
            </Card>
        </Grid>
    </>
  )
}

