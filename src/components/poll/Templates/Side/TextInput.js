import * as React from 'react'
import { Menu, MenuItem, Button} from '@mui/material'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'

const TextInput = ({ setInputHeader,setInputBody }) => {

    return(
        <>
            <PopupState variant="popover" popupId="demo-popup-menu" >
                {(popupState) => (
                <React.Fragment>
                    <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
                    Text Input
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={() => setInputHeader("HeaderInput")}>Header</MenuItem>
                    <MenuItem onClick={() => setInputBody("BodyInput")}>Body</MenuItem>
                    </Menu>
                </React.Fragment>
                )}
            </PopupState> 
        </>
    )
}

export default TextInput;