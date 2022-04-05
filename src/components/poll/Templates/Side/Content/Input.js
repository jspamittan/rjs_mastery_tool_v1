import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import { BasicTabs } from '../Index';

import { useContext, useEffect, useState } from 'react';
import { ContentContext } from '../../../../../core/context/TemplateState';

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

const InputForTabs = ({id, ContentNum, ContentName, arrKey, match}) => { 
  const [contents, setContents] = useContext(ContentContext);
  const [content, setContent] = useState([]);

  const changeValue = (e) => {
    console.log(content);
    const{ name, value } = e.target
      setContent({...content, [name] : value})
      
  }
  
  return (
    <Box component="form" noValidate sx={{ maxWidth: '100%', display: 'grid', gridTemplateColumns: { sm: '1fr' }, gap: 1, }}>      
        <FormControl disabled variant="standard">
            <InputLabel className='fw-bold' shrink htmlFor="content-input">
              Content No. 
            </InputLabel>
            <ContentInput name="ContentNum" disabled defaultValue={ContentNum} />
        </FormControl>
        <FormControl variant="standard">
            <InputLabel className='fw-bold' shrink htmlFor="contentname-input">
              Content Name
            </InputLabel>
            <ContentInput name="ContentName" defaultValue={ContentName} onChange={(e)=>changeValue(e)} />
        </FormControl>
    </Box>
  );
}

export default InputForTabs;