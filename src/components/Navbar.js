import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar({login}) {
  const style = {backgroundColor : "#222"};
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={style}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            StarWars
          </Typography>
          <Button color="inherit">{login ? "Hi, Vaibhav" : "Login"}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}