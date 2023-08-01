
import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Button } from 'bootstrap';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});



const ItemList = ({ items }) => {
  const [visibleItems, setVisibleItems] = useState(3);

  const handleShowMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 3);
  };
  

  return (
       <div style={{width:"100%",paddingLeft:"10px"}}>
         
          {items.slice(0, visibleItems).map(item => (
            
            <List sx={{ width: '100%', maxWidth: 360,m:-3 }}>
              <ListItem alignItems="flex-start">
              <ListItemText
                primary={item[0]}
                secondary={
                  <React.Fragment>
                    {item[1]} Post Today
                  </React.Fragment>
                  }
                />
              </ListItem>
            </List>
           
          ))}
        
        
         
          {visibleItems < items.length && (
            <button onClick={handleShowMore} style={{width:"100%",padding:"10px",border:"none", backgroundColor: 'rgba(0, 0, 0, 0.00)',marginTop:"10px",color:"white"}}>Show more</button>
          )}
          
        </div>
     
   
  );
};

export default ItemList;
