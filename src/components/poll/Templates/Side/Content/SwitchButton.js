import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export function SwitchButton() {
  return (
    <FormControl component="fieldset" >
        <FormControlLabel
          value="Select multiple answers"
          control={<Switch color="primary" />}
          label="Select multiple answers"
          labelPlacement="start"
          sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper', color: 'black', margin: 0  }}
          className="text-start p-0 mt-3 border border-dark"
        />
        <div className="border-bottom border-secondary p-0 pb-4 w-100">
        </div>
        <FormControlLabel
          value="Show results"
          control={<Switch color="primary" />}
          label="Show results"
          labelPlacement="start"
          sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper', color: 'black', margin: 0  }}
          className="text-sm-start mt-3 border border-dark"
        />        
    </FormControl>
  );
}
