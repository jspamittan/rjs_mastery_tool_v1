import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

import crossImg from '../../../../assets/images/core/cross.png';
import { InputSearch } from './ImageSearch';
import { ImageLists } from './ImageLists';

export function AddImage() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <img  
        src={crossImg} 
        alt="Cross Image" 
        onDoubleClick={handleClickOpen('paper')} 
        className="center mb-5 pointer" 
        style={{width: "40%"}} />
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogActions> 
          <ClearRoundedIcon onClick={handleClose} className="pointer" />
        </DialogActions>
        <DialogTitle id="scroll-dialog-title" className='center'>
            Add Image
            <InputSearch className="w-100" /> 
        </DialogTitle>        
        
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <ImageLists />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

