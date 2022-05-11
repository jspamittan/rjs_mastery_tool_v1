import * as React from 'react'
import { Menu,MenuItem,Button } from '@mui/material'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'
import TextInput from "./TextInput"
import ImageInput from "./ImageInput"

const MenuList = ({ setInputHeader, setInputBody, setImageHeader, setImageBody }) => {

  return(
    <>
        <TextInput setInputHeader={setInputHeader} setInputBody={setInputBody} />
        <ImageInput setImageHeader={setImageHeader} setImageBody={setImageBody} />  

        <PopupState variant="popover" popupId="demo-popup-menu" >
            {(popupState) => (
            <React.Fragment>
                <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
                Video
                </Button>
                <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>Header</MenuItem>
                <MenuItem onClick={popupState.close}>Body</MenuItem>
                </Menu>
            </React.Fragment>
            )}
        </PopupState>   

        <PopupState variant="popover" popupId="demo-popup-menu" >
            {(popupState) => (
            <React.Fragment>
                <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
                Blocks
                </Button>
                <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>Header</MenuItem>
                <MenuItem onClick={popupState.close}>Body</MenuItem>
                </Menu>
            </React.Fragment>
            )}
        </PopupState>   

        <PopupState variant="popover" popupId="demo-popup-menu" >
            {(popupState) => (
            <React.Fragment>
                <Button variant="contained" color="primary" sx={{marginBottom: 2}} {...bindTrigger(popupState)}>
                Buttons
                </Button>
                <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>Header</MenuItem>
                <MenuItem onClick={popupState.close}>Body</MenuItem>
                </Menu>
            </React.Fragment>
            )}
        </PopupState>      
    </>
  )
}

export default MenuList;

