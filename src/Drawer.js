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
import { CiDiscount1 } from "react-icons/ci";
import  { ReactComponent as Logo } from './images/Discount.svg';
import { SvgIcon } from '@mui/material';


const drawerWidth = 220;

function ResponsiveDrawer(props) {
   const drawer = (
    <Box sx={{backgroundColor:'#1E2640',color:'white'}}>
     <Typography>Nishyan</Typography>
     <Typography>Visit Store</Typography>
      
      <List >
        
          <ListItem sx={{mb:-2 ,backgroundColor:'#1E2640',color:'white' }}><ListItemButton sx={{width:'100'}}>
              <ListItemIcon>
              <HomeOutlinedIcon sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{mb:-2,backgroundColor:'#1E2640',color:'white'}}><ListItemButton>
              <ListItemIcon>
                <AssignmentOutlinedIcon sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary='Orders' />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{mb:-2,backgroundColor:'#1E2640',color:'white'}}><ListItemButton>
              <ListItemIcon>
                <GridViewOutlinedIcon sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary= 'Products'/>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{mb:-2,backgroundColor:'#1E2640',color:'white'}}><ListItemButton>
              <ListItemIcon>
                <LocalShippingOutlinedIcon sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary='Delivery' />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{mb:-2,backgroundColor:'#1E2640',color:'white'}}><ListItemButton>
              <ListItemIcon>
                <CampaignOutlinedIcon sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary= 'Marketing'/>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{mb:-2,backgroundColor:'#1E2640',color:'white'}}><ListItemButton>
              <ListItemIcon>
                <SignalCellularAltOutlinedIcon sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary='Analytics' />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{mb:-2,backgroundColor:'#1E2640',color:'white'}}><ListItemButton>
              <ListItemIcon>
                <PaymentsIcon sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary='Payouts' />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{mb:-2,backgroundColor:'#1E2640',color:'white'}}><ListItemButton>
              <ListItemIcon>
              <SvgIcon   sx={{color:'white'}} ><Logo></Logo></SvgIcon>
                
              </ListItemIcon>
              <ListItemText primary= 'Discounts'/>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{mb:-2,backgroundColor:'#1E2640',color:'white'}}><ListItemButton>
              <ListItemIcon>
                <PeopleAltOutlinedIcon sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary='Audience' />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{mb:-2,backgroundColor:'#1E2640',color:'white'}}><ListItemButton>
              <ListItemIcon>
                <ColorLensOutlinedIcon sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary='Appearence' />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{mb:-2,backgroundColor:'#1E2640',color:'white',mb:10.9}}><ListItemButton>
              <ListItemIcon>
                <BoltOutlinedIcon sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary='Plugins' />
            </ListItemButton>
          </ListItem>
       
      </List>
      
    </Box>
  );
  return (
    <Box sx={{backgroundColor:'#1E2640',color:'white'}} >
          
      <Box
        component="nav"
        sx={{backgroundColor:'#1E2640',color:'white',width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{backgroundColor:'#1E2640',color:'white',
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
