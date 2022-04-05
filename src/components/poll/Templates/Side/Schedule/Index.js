import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';

//import Stack from '@mui/material/Stack'; 
//import AdapterDateFns from '@mui/lab/AdapterDateFns';
//import LocalizationProvider from '@mui/lab/LocalizationProvider';
//import DesktopDatePicker  from '@mui/lab/DatePicker'
//import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
//import { RangeDateforSchedule } from './dateRange';
//import { InputForTabs } from '../contentTab/contentInput';

export function ScheduleInputs() {
    
  return (
    <Box component="form" noValidate sx={{ maxWidth: '100%', display: 'grid', gridTemplateColumns: { sm: '1fr' }, gap: 1, }} >      
        <FormControl>
            {/** DATE RANGE */} DATE RANGE
        </FormControl>
        <div className="border-bottom border-secondary p-0 pb-2 w-100"></div>
        <FormControl><br />
              <label className="text-black" >Timing of pop out</label>
            <FormControlLabel control={<Checkbox />} label="After log in" className="text-black ml-2" name="checkboxes" />
            <FormControlLabel control={<Checkbox />} label="1 minute after log in" className="text-black ml-2"  />
            <FormControlLabel control={<Checkbox />} label="2 minutes after log in" className="text-black ml-2" />
            <FormControlLabel control={<Checkbox />} label="3 minutes after log in" className="text-black ml-2" />
            <FormControlLabel control={<Checkbox />} label="4 minutes after log in" className="text-black ml-2" />
            <FormControlLabel control={<Checkbox />} label="5 minutes after log in" className="text-black ml-2" />
            <FormControlLabel value="Customize" control={<Radio />} label="Customize timing of pop out" className="text-black ml-2"  />
            <TextField id="outlined-number" label="minutes" type="number" className="w-25" InputLabelProps={{ shrink: true, }}
        />
        </FormControl>
        <div className="border-bottom border-secondary p-0 pb-2 w-100"></div>
    </Box>
  );
}
