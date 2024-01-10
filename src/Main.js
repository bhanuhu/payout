import { Box, Typography,Stack, Button } from "@mui/material";
import Dropdown from './Dropdown';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Table from './Table';

const Main=()=>{
    return(<Box>
        <Stack direction='row'>
        <Typography sx={{mt:5,ml:35,mr:135,mb:2}}>Overview</Typography>
        <Dropdown sx={{mt:2}}/>
        </Stack>
        <Stack direction='row'>
        <Card1 sx={{mt:2,ml:30}}/>
        <Card2/>
        <Card3/>
        </Stack>
        <Typography>Transactions | This Month</Typography>
        <Stack direction='row'  sx={{mt:5,ml:35}}>
        <Button variant="contained" sx={{borderRadius:7, mr:1,backgroundColor:'#E6E6E6',color:'#4C4C4C'}}><Typography>Payouts (22)</Typography></Button>
        <Button variant="contained" sx={{borderRadius:7 , backgroundColor:'#146EB4'}}><Typography>Refunds (6)</Typography></Button>

        </Stack>
        <Table/>

        
        </Box>)
}
export default Main;