import { Link } from 'react-router-dom';
import { DrawerData } from './DrawerData';
import { Box, Drawer, Toolbar, List, Typography, Avatar } from '@mui/material';
import { IconContext } from 'react-icons';
import { deepOrange } from '@mui/material/colors';

const ClippedDrawer = () => {

return (
    <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Drawer variant="permanent" sx={{
            flexShrink: 1,
            [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', zIndex:'0', backgroundColor:'#116ca8', alignItems:'center'},
            }}>
            <Toolbar />
            <Toolbar />
            <Avatar sx={{ bgcolor: deepOrange[500] }}>
                MT
            </Avatar>
            <Typography variant="button" color="#fff" fontSize={18}>Mastery Tool</Typography>
            <Box sx={{marginTop: 3}}>
            {DrawerData.map((item, index) => {
                return (
                <List key={index}>
                    <Link to={item.path} style={{textDecoration: "none",}}>
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