import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, InputBase, alpha ,Typography,Stack} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import LensIcon from '@mui/icons-material/Lens';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ImportExportOutlinedIcon from '@mui/icons-material/ImportExportOutlined';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('#281209','processing', 131634495747, "Today, 08:45 PM", 1125.00),
  createData('#281208','Successful', 131634495747, "Yesterday, 3:00 PM", 1125.00),
  createData('#281207','Successful', 131634495747, "12 Jul 2023,3:00 PM", 1125.00),
  createData('#281206','Successful', 131634495747, "12 Jul 2023,3:00 PM", 1125.00),
  createData('#281205','Successful', 131634495747, "12 Jul 2023,3:00 PM", 1125.00),
  createData('#281204','Successful', 131634495747, "12 Jul 2023,3:00 PM", 1125.00),

];

const SearchIconWrapper = styled('div')(({ theme }) => ({
  color: 'black',
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Search = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(5),
  position: 'relative',
  borderRadius: 5,
  border: "1px solid black",
  // backgroundColor: '#F2F2F2',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, (242, 242, 242)),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '300px',

  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(5),
    // width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    marginRight: theme.spacing(15),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30ch',
    },
  },
}));


 
export default function BasicTable() {
  return (
    <Box sx={{ float: "right", width: "80%", overflowX: "hidden",mr:'2.5%',boxShadow:3,mt:'2%' }}>
      <Box sx={{ float: "center" }}>
        <Box mb="10px" sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end",mt:'-2%' }}>
          <Search sx={{ backgroundColor: (242, 242, 242) }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Order ID or Transaction ID"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{mr:'8%'}}>
            <Box sx={{ float: "right", border: "1px solid grey", padding: "2px", mr: "10px" ,height:'25px'}}>
              <FileDownloadOutlinedIcon color='action'  />
            </Box>
            <Box sx={{ float: "right", border: "1px solid grey", px: "10px", py: "2px", mr: "10px" }}>
            <Stack direction='row'>
              <Typography sx={{}}>  Sort</Typography>
              <ImportExportOutlinedIcon color='action' sx={{}} />
              </Stack>
            </Box>
          </Box>

        </Box>

        <TableContainer component={Paper} mt="10px">
          <Table sx={{ minWidth: 650, float: "right", width: "100%", overflowX: "hidden" ,ml:'0%'}} aria-label="simple table">
            <TableHead>
              <TableRow sx={{backgroundColor:'#F2F2F2'}}>
                <TableCell align='right'>Order ID</TableCell>
                <TableCell align='right'>Status</TableCell>
                <TableCell align="right">Transaction Id</TableCell>
                <TableCell align="right">Refund Date</TableCell>
                <TableCell align="right">Order Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align='right'>{row.name}</TableCell>
                  <TableCell align="right"><LensIcon sx={{ fontSize: 10 }} color={row.name !== "processing" ? "success" : "action"} /> {row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">&#8377;{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

    </Box>

  );
}
