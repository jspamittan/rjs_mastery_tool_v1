import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '../../components/home/Index';
import { Statistics } from '../../components/statistics/Index';
import { Poll } from '../../components/poll/Index'
import { Templates } from '../../components/poll/Templates/Index.js'
import { ContentProvider } from '../context/TemplateState';

import { Box, Container, Grid } from '@mui/material';
import ClippedDrawer from '../../components/layouts/navigations/drawer/Index';

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

                        {/* POLL ROUTES */}{/**ADDED /poll/templates route */}
                        <Route exact path="/poll" render={props=>(<Poll {...props} />)} />
                        <ContentProvider>
                            <Route exact path="/poll/templates" render={props=>(<Templates {...props} />)} />
                        </ContentProvider>

                        {/* STATISTICS ROUTES */}
                        <Route exact path="/statistics" render={props=>(<Statistics {...props} />)} />

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
