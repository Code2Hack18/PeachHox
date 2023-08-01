import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const  BasicList2 = () => {
  return (
    
    <List sx={{ width: '100%', maxWidth: 360,}}>
       <Typography style={{margin:"10px 10px",}}>My community</Typography>
      <ListItem alignItems="flex-start" >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4MvLOkC3uKuCKFu5UEigbHPcsuP8TyxuN0w&usqp=CAU" />
        </ListItemAvatar>
        <ListItemText 
          
          primary="Indonesia UI Designer"
          secondary={
            <React.Fragment>
              {'238 members'}
            </React.Fragment>
            
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnMi6fSgxwGpGesxNfwGV19C4j1y9v6JsJnw&usqp=CAU" />
        </ListItemAvatar>
        <ListItemText
          primary="Indonesia UK Research"
          secondary={
            <React.Fragment>
              {'238 members'}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIP5GkqdY9uuDZiFJEvyzQB65kMKhFF29DYw&usqp=CAU" />
        </ListItemAvatar>
        <ListItemText
          primary="Frontend Developer Indonesia"
          secondary={
            <React.Fragment>
              {'238 members'}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOjAoHsebIDmUwaYN_02DNMgA_OT9nm2bLug&usqp=CAU" />
        </ListItemAvatar>
        <ListItemText
          primary="Indonesia Website Developer"
          secondary={
            <React.Fragment>
              {'238 members'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}

export default BasicList2