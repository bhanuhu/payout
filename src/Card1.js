import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Stack } from '@mui/material';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (<Box sx={{ minWidth:'25%' ,ml:35}}>
    <Card >
      <CardContent sx={{    backgroundColor:'#146EB4',mb:'-4% '}}>
      <Stack direction='row'>
        <Typography sx={{ fontSize: 14 ,color:'white'}} color="text.secondary" variant='h2' gutterBottom>
          Next Payment
        </Typography>
        < HelpOutlineOutlinedIcon sx={{color:'white',ml:'1%',height:16}}/>
        </Stack>
        <Stack direction= 'row'>
        <Typography sx={{color:'white'}} variant='h4'>&#8377; 2,312.23</Typography>
        
        <Link href="#" variant="body2" sx={{ml:'20%' ,color:'white',mt:'2%'}}>
            {'23 Orders '}>
        </Link>
        </Stack>
        </CardContent>
        <CardContent sx={{    backgroundColor:'#0E4F82',mt:'4%'}}>
        <Stack direction= 'row' sx={{    backgroundColor:'#0E4F82',mb:'-3%',mt:'-2%'  ,pb:'0%'}}>
        <Typography sx={{color:'white'}} variant='caption'>Next Payout Date</Typography>
        <Typography sx={{color:'white',ml:'42%'}} variant='caption'>Today, 04:00PM</Typography>
                
        
        </Stack>
        </CardContent>
    </Card></Box>
  );
}
