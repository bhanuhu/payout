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
    <Card sx={{ minWidth: 275 ,ml:30,Height:25,mt:2,mb:5,ml:5 }}>
      <CardContent sx={{    backgroundColor:'white'}}>
      <Stack direction='row'>
      <Typography sx={{ fontSize: 14 ,color:'#4C4C4C'}} color="text.secondary" gutterBottom>
        Amount Pending
      </Typography>
      < HelpOutlineOutlinedIcon sx={{color:'#4C4C4C',ml:1,mt:.3,mr:1,height:16}}/>
      </Stack>
        <Stack direction= 'row'>
        <Typography>&#8377; 92,312.20</Typography>
        
        
        </Stack>
        </CardContent>
        
    </Card>
  );
}
