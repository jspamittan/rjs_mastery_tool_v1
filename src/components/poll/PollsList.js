import * as React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'
import { Box, Grid, Button, Card, CardContent, Typography, Menu, MenuItem, } from '@mui/material'
import crossImg from '../../assets/images/core/cross.png'
import MenuIcon from '@mui/icons-material/Menu'

const PollsList = ({name}) => {
  
  return(
    <>
        <Grid item md={3} display="flex">
            <Card sx={{ width:500, maxWidth: 500, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', m:1, borderRadius: 3,}}>
                <CardContent>
                    <Typography gutterBottom variant="subtitle2" component="div">
                    <strong> {name} </strong>
                    <PopupState variant="popover" popupId="demo-popup-menu" >
                        {(popupState) => (
                        <React.Fragment>
                            <Button sx={{marginLeft: 5}} {...bindTrigger(popupState)}>
                                <MenuIcon />
                            </Button>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem onClick={popupState.close}>Rename</MenuItem>
                                <MenuItem onClick={popupState.close}>Update</MenuItem>
                                <MenuItem onClick={popupState.close}>Duplicate</MenuItem>
                            </Menu>
                        </React.Fragment>
                        )}
                    </PopupState> 
                    </Typography>
                    <Box component="img" sx={{width: "100%"}} alt="Cross Image" src={crossImg} />
                </CardContent>
                <Link style={{textDecoration:"none"}}>
                    <Button variant="contained" color="primary" >
                        Create Content
                    </Button>
                </Link>
            </Card>
        </Grid>
    </>
  )
}

export default PollsList;