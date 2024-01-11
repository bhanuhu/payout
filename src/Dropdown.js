import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: '8%',mt:2,mr:'5%',ml:'-5%' ,height:'20%'}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">This Month</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="This Month"
          onChange={handleChange}
        >
          <MenuItem value={10}>January</MenuItem>
          <MenuItem value={20}>February</MenuItem>
          <MenuItem value={30}>March</MenuItem>
          <MenuItem value={10}>April</MenuItem>
          <MenuItem value={20}>May</MenuItem>
          <MenuItem value={30}>June</MenuItem>
          <MenuItem value={10}>July</MenuItem>
          <MenuItem value={20}>August</MenuItem>
          <MenuItem value={30}>September</MenuItem>
          <MenuItem value={10}>October</MenuItem>
          <MenuItem value={20}>November</MenuItem>
          <MenuItem value={30}>December</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
