import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';




import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 290;

export default function SideDrawer() {

  return (
    <Box sx={{ display: 'flex' }}>
      
      
      <Drawer
        variant="permanent"
        sx={{
          backgroundColor: '#C5ECF1',
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#C5ECF1',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
        <Toolbar />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
            sx={{
                width: '250px',
                height: '310px',
                fontSize: '16px',
            }}
            />
        </LocalizationProvider>
        </Box>
      </Drawer>

     
    

    </Box>
  );
}
