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
  return (
    <Card sx={{ minWidth: 275 ,ml:35}}>
      <CardContent sx={{    backgroundColor:'#146EB4'}}>
      <Stack direction='row'>
        <Typography sx={{ fontSize: 14 ,color:'white'}} color="text.secondary" gutterBottom>
          Next Payout
        </Typography>
        < HelpOutlineOutlinedIcon sx={{color:'white',ml:1,mt:.3,mr:1,height:16}}/>
        </Stack>
        <Stack direction= 'row'>
        <Typography sx={{color:'white'}}>Rs 2,312.23</Typography>
        
        <Link href="#" variant="body2" sx={{ml:5 ,color:'white'}}>
            {'23 Orders '}>
        </Link>
        </Stack>
        </CardContent>
        <CardContent sx={{    backgroundColor:'#0E4F82'}}>
        <Stack direction= 'row'>
        <Typography sx={{color:'white'}}>Next Payment Date</Typography>
        <Typography sx={{color:'white'}}>Today, 04:00PM</Typography>
                
        
        </Stack>
        </CardContent>
    </Card>
  );
}
