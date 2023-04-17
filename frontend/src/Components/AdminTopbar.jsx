import { AppBar, Avatar, Box, Button, Chip,  Divider,  Fade,  InputBase,  Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { Stack } from "@mui/system";

import { styled, alpha } from '@mui/material/styles';
import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const useStyles = styled((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));



  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

export default function AdminTopbar() {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor:'#198897'}}>
          <Toolbar>
          <Stack direction = {'row'} flexGrow = {1} alignItems="center" justifyContent="flex-start" spacing={1}>
            <Avatar src="https://upload.wikimedia.org/wikipedia/en/6/65/LOGO_OF_RUHUNA.jpg"  sx={{ width: 56, height: 75 }} variant="square"/>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign:"revert-layer" }}>
                UNIVERSITY OF RUHUNA
                </Typography>

                <Stack direction="row" spacing={2}>
                
                    <div>
                    <Button  onClick={handleClick}>
                    <Chip
                        sx={{ backgroundColor: '#C5ECF1' }}
                        avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                        label={
                            <Stack direction="row" spacing={1} alignItems="center">
                            Admin
                            <ArrowDropDownIcon />
                            </Stack>
                        }
                        />         
                    </Button>
                    <Menu
                        className={classes.root}
                        id="fade-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>Settings</MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                    </div>

                </Stack>
                
          </Stack> 
         </Toolbar>
        </AppBar>
      </Box>
    );
  }

