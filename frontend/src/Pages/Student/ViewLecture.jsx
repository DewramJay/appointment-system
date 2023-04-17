import { AppBar, Box, CssBaseline, Toolbar } from "@mui/material";
import MainTopbar from "../../Components/MainTopbar";

export default function ViewLecture () {
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline/>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <MainTopbar/>      
        </AppBar>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar/>
          <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Box component="main" sx={{ flexGrow: 1, p: 3 ,backgroundColor:"#000066",height: '100%'}}>
            <Toolbar />
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
                <Grid item xs={3} md={3} sx={{borderRight: 1, borderColor: 'divider'}}>
                <Box p={2}>
                    <Chip label="Scheduled Appointments" sx={{ fontSize: "1.2rem" }} />
                </Box>
                </Grid>
                <Grid item xs={9} md={9}>
                <Box p={2}>
                    <Chip label="Notifications" sx={{ fontSize: "1.2rem" }} />
                </Box>
                </Grid>
            </Grid>
            </Box>
           
          </Box>
        </Box>
        </Box>
      </Box>
    );
  }