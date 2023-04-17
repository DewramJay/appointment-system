import { AppBar, Box, Button, CardContent, Chip, CssBaseline, Divider, Grid, List, ListItem, Stack, Toolbar, Typography } from "@mui/material";
import MainTopbar from "../../Components/MainTopbar";
import AdminTopbar from "../../Components/AdminTopbar";

export default function AddStudent() {
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline/>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
           <AdminTopbar/>   
        </AppBar>
               
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar/>
          <Stack direction="row" spacing={0}>
          <Button variant='text' >Student - </Button> 
          <Button variant='text' >21 st Batch</Button> 
          </Stack>
            
          <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Box component="main" sx={{ flexGrow: 1, p: 3 ,backgroundColor:"#FFFFFF",height: '100%'}}>
           
            <Grid item xs={8} md={9}>
              <Box p={2}>
                <CardContent>
                    <Toolbar/>
                <Stack direction="row" spacing={4}>
                <Chip label="Name" sx={{ fontSize: "1.0rem", width: "25%" }} />
                <Chip
                    sx={{ backgroundColor: '#C5ECF1', fontSize: "1.0rem", width: "50%" }}
                    label={
                    <Stack direction="row" spacing={1} >
                        HETTIARACHCHI B.H.S.N.
                    </Stack>
                    }
                />
                </Stack>
                <Stack direction = {'row'} flexGrow = {1}sx={{ height:10}}></Stack>


                <Stack direction="row" spacing={4}>
                <Chip label="Registration No." sx={{ fontSize: "1.0rem", width: "25%" }} />
                <Chip
                    sx={{ backgroundColor: '#C5ECF1', fontSize: "1.0rem", width: "50%" }}
                    label={
                    <Stack direction="row" spacing={1} >
                        EG/2019/3604
                    </Stack>
                    }
                />
                </Stack>
                <Stack direction = {'row'} flexGrow = {1}sx={{ height:10}}></Stack>


                <Stack direction="row" spacing={4}>
                <Chip label="Student Mail" sx={{ fontSize: "1.0rem", width: "25%" }} />
                <Chip
                    sx={{ backgroundColor: '#C5ECF1', fontSize: "1.0rem", width: "50%" }}
                    label={
                    <Stack direction="row" spacing={1} >
                        HETTIARACHCHI B.H.S.N.
                    </Stack>
                    }
                />
                </Stack>
                <Stack direction = {'row'} flexGrow = {1}sx={{ height:10}}></Stack>


                <Stack direction="row" spacing={4}>
                <Chip label="User Name" sx={{ fontSize: "1.0rem", width: "25%" }} />
                <Chip
                    sx={{ backgroundColor: '#C5ECF1', fontSize: "1.0rem", width:"50%" }}
                    label={
                    <Stack direction="row" spacing={1} >
                        student21
                    </Stack>
                    }
                />
                </Stack>
                <Stack direction = {'row'} flexGrow = {1}sx={{ height:10}}></Stack>


                <Stack direction="row" spacing={4}>
                <Chip label="Password." sx={{ fontSize: "1.0rem", width: "25%" }} />
                <Chip
                    sx={{ backgroundColor: '#C5ECF1', fontSize: "1.0rem", width: "50%" }}
                    label={
                    <Stack direction="row" spacing={1} sx={{ alignItems: "center", textAlign: "left" }}>
                        eng@123
                    </Stack>
                    }
                />
                </Stack>
                <Stack direction = {'row'} flexGrow = {1}sx={{ height:30}}></Stack>

                <Stack direction='row'  justifyContent='flex-end'  flexGrow={1} sx={{ height: 30 , width: "77%"}}>
                <Button variant='contained' sx={{ width: '20%' }}>Create Profile</Button> 
                </Stack>

                </CardContent>
              </Box>
            </Grid>
          </Box>
        </Box>

        <Stack direction = {'row'} height={100}></Stack> 
              
              <Divider/>
              
              <Stack direction = {'row'} flexGrow = {1} alignItems="center" justifyContent="flex-start" spacing={30} sx={{ bgcolor:""}}>
              <Typography width={500}>
                  
               The Faculty of Engineering of University of Ruhuna was established on 1st July 1999 at Hapugala, Galle.
               Admission to the Faculty of Engineering, University of Ruhuna, is subject to the University Grants Commission
               policy on university admissions.

              </Typography>
              <Typography>
              <List>
                <ListItem
                 variant="h5" gutterBottom>
                DEPARTMENTS
                </ListItem>
                <ListItem>
                Civil and Environmental Engineering
                </ListItem>
                <ListItem>
                Electrical and Information Engineering
                </ListItem>
                <ListItem>
                Mechanical and Manufacturing Engineering
                </ListItem>
                <ListItem>
                Interdisciplinary Studies
                </ListItem>    

              </List>  
              </Typography>
              <Typography>
                  <List>
                  <ListItem variant="h5" gutterBottom>
                  CONTACT US
                  </ListItem>
                  <ListItem>
                  Faculty of Engineering,Hapugala,Galle,Sri Lanka.
                  </ListItem>
                  <ListItem>
                  Phone: +(94)0 91 2245765/6
                  </ListItem>
                  <ListItem>
                  E-mail: webmaster@eng.ruh.ac.lk
                  </ListItem> 
                  </List>  
               </Typography>

              </Stack>



        </Box>
      </Box>
    );
  }