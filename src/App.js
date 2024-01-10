import Appbar from './Appbar';
import './App.css';
import Drawer from './Drawer'
import { Box } from '@mui/material';
import Main from './Main';
function App() {
  return (
    <Box>
    <Drawer sx={{position:'static '}}/>
    <Appbar/>
    <Main/>
    </Box>
  );
}

export default App;
