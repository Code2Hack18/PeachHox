
import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Button } from 'bootstrap';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});



const Comment = () => {
  const [visibleItems, setVisibleItems] = useState(1);

  const handleShowMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 10);
  };
  const items=[
    {
        name:"Ridwan Beler",
        comment:"This in nice boy. This is very good",
        source:"https://www.vhv.rs/dpng/d/454-4544542_doug-headshot-circular-circular-image-of-a-person.png"
    },
    {
        name:"Maria Galu ",
        comment:"This is good enough.I am vey Handsome",
        source:"https://www.pngfind.com/pngs/m/3-30232_hillary-rodham-clinton-circle-black-background-circular-image.png"},
    {
        name:"Chari bulle ",
        comment:"hey bro,kaisa ho,sab baria",
        source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUOAUwMwx7YXvP-dxWyHAz4h-YBwadBmoh0QHOvRB0ULedIm8ACcIOd0TlueRikE68jU4&usqp=CAU"
    },
    {
        name:" Gausian causg",
        comment:"Hello,This in my ma.How are you",
        source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB_mpdTkAOjNZ8_N9SNFkzq7XCHXP81acoXPoHCRNi1o7IQk3EMPXwcA7kEVjw9jMHXos&usqp=CAU"
    },
    {
        name:" Geaogia ",
        comment:"hey bro,kaisa ho,sab baria",
        source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuTlDkqTub-W9PFYdpllQLu8sNPSS_YgMUn5O-yIsotI4jYHbYlk-TgUCo9mZNmhC0EU&usqp=CAU"
    },
 ];
  

  return (
       <div style={{width:"100%",paddingLeft:"10px"}}>
      
          {items.slice(0, visibleItems).map(item => (
            
            <List sx={{ width: '100%', maxWidth: 360,m:-3 }}>
                <ListItem alignItems="flex-start" >
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={item.source} />
                    </ListItemAvatar>
                    <ListItemText 
                    
                    primary={item.name}
                    secondary={
                        <React.Fragment>
                        {item.comment}
                        </React.Fragment>
                        
                    }
                    />
                </ListItem>
            </List>
           
          ))}
        
        
         
          {visibleItems < items.length && (
            <button onClick={handleShowMore} style={{width:"100%",padding:"10px",border:"none", backgroundColor: 'rgba(0, 0, 0, 0.0)',marginTop:"10px",color:"white",}}>
                <Divider sx={{ borderBottomWidth: 1,marginBottom:"20px" }} />
                <span>Show All Comments</span>
            </button>
          )}
          
        </div>
     
   
  );
};

export default Comment;
