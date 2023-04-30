import { AppBar, Box, Chip, CssBaseline, Toolbar } from "@mui/material";
import MainTopbar from "../Components/MainTopbar";
import SideDrawer from "../Components/SideDrawer";
import { Grid } from '@mui/material';
import { useState, useEffect } from "react";

export default function HomeStudent () {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('User');

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      setUser(parsedUser.User);
    }
    
  }, []);
  

    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline/>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <MainTopbar/>      
        </AppBar>
        <SideDrawer/>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6} sx={{borderRight: 1, borderColor: 'divider'}}>
                <Box p={2}>
                <Chip label="Scheduled Appointments" sx={{ fontSize: "1.2rem" }} />
                </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                <Box p={2}>
                    <Chip label="Notifications" sx={{ fontSize: "1.2rem" }} />
                </Box>
                </Grid>
                <button>student</button>
                <button>lecturer</button>
            </Grid>
            </Box>
        </Box>
        </Box>
      
    );
  }