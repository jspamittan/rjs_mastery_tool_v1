import * as React from 'react';
import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
//import {  } from './contentTab/contentInput';
import { ScheduleInputs } from './Schedule/Index';
import { ContentInputs } from './Content/Index';
import { ContentButtons } from './Content/Buttons';
import InputForTabs from './Content/Input';
import { ContentContext } from '../../../../core/context/TemplateState.js';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ScheduleIcon from '@mui/icons-material/Schedule';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export function BasicTabs({match}) {  
  const [contents, setContents] = useContext(ContentContext);
  const [content, setContent] = useState([]);
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const nextButton = (e) => {
    setValue(1);
    e.preventDefault()

    setContents(contents.map(c=>(
      JSON.stringify(c.id)===match.params.id?{...content}:c
    )))
    
    console.log(content);
  }

  const backButton = (e) => {
    setValue(0);
    e.preventDefault()
  }
  
 
  return (
      <>
        
          <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                    <Tab icon={<InsertDriveFileIcon />} label="Content" {...a11yProps(0)} />
                    <Tab icon={<ScheduleIcon />} label="Schedule" {...a11yProps(1)} />
                  </Tabs>
              </Box>
              <TabPanel value={value} index={0} >
                  {
                    contents.map((content) => (
                      <InputForTabs key={content.id} id={content.id} ContentNum={content.ContentNum} ContentName={content.ContentName}/>                  
                    ))
                  } 
                  <div className="border-bottom border-secondary p-0 pb-2 w-100"></div>
                  <ContentInputs />
                  <Stack direction="row" spacing={2} sx={{ display: 'grid', gridTemplateColumns: { sm: '1fr 1fr' }, gap: 2,}}>
                    <Button variant="contained" className="bg-info text-white border border-secondary d-inline">Preview</Button>
                    <Button variant="contained" className="bg-success text-white border border-secondary d-inline " onClick={nextButton} >Next</Button>
                  </Stack>
              </TabPanel>
              <TabPanel value={value} index={1}>
                  {
                    contents.map((content) => (
                      <InputForTabs key={content.id} id={content.id} ContentNum={content.ContentNum} ContentName={content.ContentName} />                  
                    ))
                  } 
                  <div className="border-bottom border-secondary p-0 pb-3 w-100"></div>
                <ScheduleInputs />
                <Stack direction="row" spacing={2} sx={{ display: 'grid', gridTemplateColumns: { sm: '1fr 1fr' }, gap: 2,}}>
                    <Button variant="contained" className="bg-success text-white border border-secondary d-inline" onClick={backButton} >Back</Button>
                    <Button variant="contained" className="bg-info  text-white border border-secondary d-inline " >Save</Button>
                </Stack>
              </TabPanel>            
          </Box>
    </>
  );
}

