import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
const PreventReload = (e) => {
        e.preventDefault()
}
export function ContentButtons() {
  return (
    <Stack direction="row" spacing={2} 
        sx={{ display: 'grid',
        gridTemplateColumns: { sm: '1fr 1fr' },
        gap: 2,}}
        >
      <Button variant="contained" className="bg-info text-white border border-secondary d-inline">Preview</Button>
      <Button variant="contained" className="bg-success text-white border border-secondary d-inline " >Next</Button>
    </Stack>
  );
}