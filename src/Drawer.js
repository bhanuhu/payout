import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import PaymentsIcon from '@mui/icons-material/Payments';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { ReactComponent as Logo } from './images/Discount.svg';
import { Stack, SvgIcon } from '@mui/material';
import nishyan from './images/nishyam.png';

const drawerWidth = 220;

function ResponsiveDrawer(props) {
  const drawer = (
    <Box sx={{ backgroundColor: '#1E2640', color: 'white',height:'100%', overflow: "hidden" }}>
    <Stack direction='row' sx={{ml:'8%',mt:'5%'}}>  
      <img src={nishyan} height={50}/>
      <Stack sx={{ml:'8%'}}>
      <Typography>Nishyan</Typography>
      <Typography>Visit Store</Typography>
      </Stack>
      
    </Stack>

      <List >

        <ListItem sx={{ mb: -3, backgroundColor: '#1E2640', color: 'white' }}><ListItemButton sx={{ width: '100' }}>
          <ListItemIcon>
            <HomeOutlinedIcon sx={{ color: 'white',mt:'-.5%',mb:'25%'}} />
          </ListItemIcon>
          <ListItemText primary='Home' sx={{mt:'-1%',mb:'8%'}} />
        </ListItemButton>
        </ListItem>
        <ListItem sx={{ mb: -3, backgroundColor: '#1E2640', color: 'white' }}><ListItemButton>
          <ListItemIcon>
            <AssignmentOutlinedIcon sx={{ color: 'white',mt:'-.5%',mb:'25%' }} />
          </ListItemIcon>
          <ListItemText primary='Orders' sx={{mt:'-1%',mb:'8%'}}/>
        </ListItemButton>
        </ListItem>
        <ListItem sx={{ mb: -3, backgroundColor: '#1E2640', color: 'white' }}><ListItemButton>
          <ListItemIcon>
            <GridViewOutlinedIcon sx={{ color: 'white',mt:'-.5%',mb:'25%' }} />
          </ListItemIcon>
          <ListItemText primary='Products' sx={{mt:'-1%',mb:'8%'}}/>
        </ListItemButton>
        </ListItem>
        <ListItem sx={{ mb: -3, backgroundColor: '#1E2640', color: 'white' }}><ListItemButton>
          <ListItemIcon>
            <LocalShippingOutlinedIcon sx={{ color: 'white',mt:'-.5%',mb:'25%' }} />
          </ListItemIcon>
          <ListItemText primary='Delivery' sx={{mt:'-1%',mb:'8%'}}/>
        </ListItemButton>
        </ListItem>
        <ListItem sx={{ mb: -3, backgroundColor: '#1E2640', color: 'white' }}><ListItemButton>
          <ListItemIcon>
            <CampaignOutlinedIcon sx={{ color: 'white',mt:'-.5%',mb:'25%' }} />
          </ListItemIcon>
          <ListItemText primary='Marketing' sx={{mt:'-1%',mb:'8%'}}/>
        </ListItemButton>
        </ListItem>
        <ListItem sx={{ mb: -3, backgroundColor: '#1E2640', color: 'white' }}><ListItemButton>
          <ListItemIcon>
            <SignalCellularAltOutlinedIcon sx={{ color: 'white',mt:'-.5%',mb:'25%' }} />
          </ListItemIcon>
          <ListItemText primary='Analytics' sx={{mt:'-1%',mb:'8%'}}/>
        </ListItemButton>
        </ListItem>
        <ListItem sx={{ mb: -3, backgroundColor: '#1E2640', color: 'white' }}><ListItemButton>
          <ListItemIcon>
            <PaymentsIcon sx={{ color: 'white',mt:'-.5%',mb:'25%' }} />
          </ListItemIcon>
          <ListItemText primary='Payouts' sx={{mt:'-1%',mb:'8%'}}/>
        </ListItemButton>
        </ListItem>
        <ListItem sx={{ mb: -3, backgroundColor: '#1E2640', color: 'white' }}><ListItemButton>
          <ListItemIcon>
            <SvgIcon sx={{ color: 'white' ,mt:'-.5%',mb:'25%'}} ><Logo></Logo></SvgIcon>

          </ListItemIcon>
          <ListItemText primary='Discounts' sx={{mt:'-1%',mb:'8%'}}/>
        </ListItemButton>
        </ListItem>
        <ListItem sx={{ mb: -3, backgroundColor: '#1E2640', color: 'white' }}><ListItemButton>
          <ListItemIcon>
            <PeopleAltOutlinedIcon sx={{ color: 'white' ,mt:'-.5%',mb:'25%'}} />
          </ListItemIcon>
          <ListItemText primary='Audience' sx={{mt:'-1%',mb:'8%'}}/>
        </ListItemButton>
        </ListItem>
        <ListItem sx={{ mb: -3, backgroundColor: '#1E2640', color: 'white' }}><ListItemButton>
          <ListItemIcon>
            <ColorLensOutlinedIcon sx={{ color: 'white' ,mt:'-.5%',mb:'25%'}} />
          </ListItemIcon>
          <ListItemText primary='Appearence' sx={{mt:'-1%',mb:'8%'}}/>
        </ListItemButton>
        </ListItem>
        <ListItem sx={{  backgroundColor: '#1E2640', color: 'white' }}><ListItemButton>
          <ListItemIcon>
            <BoltOutlinedIcon sx={{ color: 'white' ,mt:'-.5%',mb:'25%'}} />
          </ListItemIcon>
          <ListItemText primary='Plugins' sx={{mt:'-1%',mb:'8%'}}/>
        </ListItemButton>
        </ListItem>

      </List>
      <Box sx={{mt:'10%'}}>
      <Stack direction='row' sx={{ml:'5%' ,backgroundColor:'#353C53',borderRadius:2,p:"3%"}}>
        <AccountBalanceWalletOutlinedIcon sx={{mt:'1%',fontSize:35,backgroundColor:'#494F64',borderRadius:2,p:"1%"}}/>
        <Stack sx={{ml:'5%'}}>
          <Typography variant="caption" >Available Credits</Typography>
          <Typography>222.10</Typography>
        </Stack>
      </Stack>
      </Box>


    </Box>
  );
  return (
    <Box sx={{ backgroundColor: '#1E2640', color: 'white' }} >

      <Box
        component="nav"
        sx={{ backgroundColor: '#1E2640', color: 'white', width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            backgroundColor: '#1E2640', color: 'white',
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
