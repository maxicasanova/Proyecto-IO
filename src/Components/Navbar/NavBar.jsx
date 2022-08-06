import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CoffeeIcon from '@mui/icons-material/Coffee';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MyLogo from '../../images/Logo.png';
import Slide from '@mui/material/Slide';
import TelegramIcon from '@mui/icons-material/Telegram';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import useScrollTrigger from '@mui/material/useScrollTrigger';

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }


const NavBar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();
  const paginas = [
    'Cursos', 
    'Club', 
    'Ciudadania', 
    'Traducciones', 
    // 'Recursos',
    'Sobre Nosotras'
  ]
  const rutas = [
    '/courses', 
    '/club', 
    '/citizenship', 
    '/translations', 
    // '/resources', 
    '/aboutus'
  ]

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleHomeClick = () => {
    navigate('/');
  }
  
  return (
    <HideOnScroll>
    <AppBar
      sx={{ bgcolor: green[700] }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button
            onClick={() => handleHomeClick()}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              color: 'inherit',
            }}
          >
            <Box component='img' src={MyLogo} alt='logo italiano oggi' sx={{height: '40px'}}>
            </Box>
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu de opciones"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* menu dispositivos pequenos */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none', width:'100vw', height:'100vh' },
              }}
            >
              {paginas.map((page, index) => (
                <MenuItem key={page} onClick={() => {handleCloseNavMenu();navigate(rutas[index]);}} sx={{fontWeight:'800'}}>
                  <Typography textAlign="center">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Button
            onClick={() => handleHomeClick()}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              color: 'inherit'
            }}
          >
            <Box component='img' src={MyLogo} alt='logo italiano oggi' sx={{height: '40px'}}>
            </Box>
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* menu para grandes pantallas */}
            {paginas.map((page, index) => (
              <Button
                key={page}
                onClick={() => {handleCloseNavMenu();navigate(rutas[index]);}}
                sx={{ my: 2, color: 'white', display: 'block', fontWeight:'700' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box component = 'a' href='https://t.me/italiano_oggi' target="_blank">
            <TelegramIcon sx={{color:'white','&:hover': {transform: 'scale(1.05)'}}}/>
          </Box>
          <Box component = 'a' href='https://www.buymeacoffee.com/italianooggi' target="_blank">
            <CoffeeIcon sx={{color:'white','&:hover': {transform: 'scale(1.05)'}}}/>
          </Box>
          <Box component='a' href='https://vm.tiktok.com/ZMNHSsT4F/' sx={{'&:hover': {transform: 'scale(1.05)'}}}>
            <img src='https://img.icons8.com/ios-glyphs/30/ffffff/tiktok.png' alt='tiktok'
              sx={{height:'24px', width:'24px'}}/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </HideOnScroll>
  );
};
export default NavBar;
