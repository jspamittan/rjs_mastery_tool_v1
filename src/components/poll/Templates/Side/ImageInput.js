import * as React from 'react'
import { Menu, MenuItem, Button} from '@mui/material'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'

const ImageInput = ({ setImageHeader, setImageBody }) => {

    return(
        <>
            <PopupState variant="popover" popupId="demo-popup-menu" >
                {(popupState) => (
                <React.Fragment>
                    <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
                    Image
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={() => setImageHeader("HeaderImage")}>Header</MenuItem>
                    <MenuItem onClick={() => setImageBody("BodyImage")}>Body</MenuItem>
                    </Menu>
                </React.Fragment>
                )}
            </PopupState> 
        </>
    )
}

export default ImageInput;
