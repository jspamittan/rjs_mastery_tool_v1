import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '../../components/home/Index';
import { Statistics } from '../../components/statistics/Index';
import { Templates, Contents } from '../../components/poll/Index'
import Poll from '../../components/poll/templates/Index'
import { Box, Container, Grid } from '@mui/material';
import ClippedDrawer from '../../components/layouts/navigations/drawer/Index';
import { PollProvider } from '../context/PollsContext';

export const WebRoute = () => {
    return (
        <Router>
            <Grid container spacing={5}>
                <Grid item md={2}>
                    {/* <SidebarLeft /> */}
                    <ClippedDrawer />
                </Grid>
                
                <Grid item md={10}>
                    <Switch>
                        {/* DASHBOARD ROUTES */}
                        <Route exact path="/" render={props=>(<Home />)} />

                        <PollProvider>
                        {/* POLL ROUTES */}{/**ADDED /poll/templates route */}
                        <Route exact path="/templates" render={props=>(<Templates {...props} />)} />

                        <Route exact path="/templates/new" render={props=>(<Poll {...props} />)} />
                        
                        {/* STATISTICS ROUTES */}
                        <Route exact path="/statistics" render={props=>(<Statistics {...props} />)} />
                        </PollProvider>
                        {/* 404 NOT FOUND */}
                        <Route>
                            <Container>
                                <Box display="flex">
                                    Error 404
                                </Box>
                            </Container>
                        </Route>
                        
                    </Switch>
                </Grid>
            </Grid>
        </Router>
    )
}
