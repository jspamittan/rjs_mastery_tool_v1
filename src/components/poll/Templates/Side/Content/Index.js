import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { FontDialog } from './FontStyle';
import { BGColorDialog } from './BackgroundColor';
import { SwitchButton } from './SwitchButton';
import { InputForTabs } from './Input';

const ContentInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '100%',
    padding: '5px 5px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export function ContentInputs() {
  return (
    <Box
      component="form"
      noValidate
      sx={{
        maxWidth: '100%',
        display: 'grid',
        gridTemplateColumns: { sm: '1fr' },
        gap: 1,
      }}
    >      
        <FormControl>
            <FontDialog />
        </FormControl>
        <div className="border-bottom border-secondary p-0 pb-2 w-100"></div>
        <FormControl>
            <BGColorDialog />
        </FormControl>
        <div className="border-bottom border-secondary p-0 pb-2 w-100"></div>
        <FormControl>
            <SwitchButton />
        </FormControl>        
        <div className="border-bottom border-secondary p-0 mb-4 w-100"></div>

    </Box>
  );
}
