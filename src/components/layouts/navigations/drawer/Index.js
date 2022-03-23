import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DrawerData } from './DrawerData';
import { IconContext } from 'react-icons';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

const ClippedDrawer = () => {
  const [ sidebar ] = useState(true);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        {/* <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' >
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav> */}
        <Drawer variant="permanent" sx={{
          flexShrink: 1,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', zIndex:'0', backgroundColor:'#116ca8', alignItems:'center'},
        }}
      >
        <Toolbar />
        <Toolbar />
        <Box >
          {DrawerData.map((item, index) => {
            return (
              <List key={index}>
                <Link to={item.path}>
                  {item.icon}
                  <Typography variant="button" color="#fff" ml={3} fontSize={18}>{item.title}</Typography>
                </Link>
              </List>
            );
          })}
        </Box>
      </Drawer>

      </IconContext.Provider>
    </>
  );
}

export default ClippedDrawer;