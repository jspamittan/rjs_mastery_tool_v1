import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../../../assets/css/Sidebar.css';
import { IconContext } from 'react-icons';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';

const SidebarLeft = () => {
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
          width: 250,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 250, boxSizing: 'border-box', zIndex:'0', backgroundColor:'#116ca8'},
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          {SidebarData.map((item, index) => {
            return (
              <List key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
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

export default SidebarLeft;