import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const  BasicList3 = () => {
  return (
    
    <List sx={{ width: '100%', maxWidth: 360, }}>
      <Typography style={{margin:"10px 10px",}}>Upcomming event</Typography>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="1 Dec" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWDfRKFMciFsz9F-qyzYiBzd1ij2hnKOPCDjJ3KOM8IFC477-0tMO0L6m5U3PRR70q09E&usqp=CAU" variant='square' />
        </ListItemAvatar>
        <ListItemText
          primary="Product Designer"
          secondary={
            <React.Fragment>
              {'71k interested 7.7k ongoing'}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="" src="https://img.freepik.com/premium-vector/21st-february-calendar-icon-february-21-calendar-date-month-icon-vector-illustrator_843603-71.jpg?w=2000"  variant='square'/>
        </ListItemAvatar>
        <ListItemText
          primary="Product Designer"
          secondary={
            <React.Fragment>
              {'71k interested 7.7k ongoing'}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://img.freepik.com/premium-vector/6th-february-calendar-icon-february-6-calendar-date-month-icon-vector-illustrator_843603-751.jpg"  variant='square'/>
        </ListItemAvatar>
        <ListItemText
          primary="Indonesia Frontend"
          secondary={
            <React.Fragment>
              {'71k interested 7.7k ongoing'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}

export default BasicList3