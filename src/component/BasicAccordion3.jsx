import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ItemList2 from './ItemList2';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


export default function BasicAccordion3() {

    const items=[
        {name:"Ridwan Beler",status:"yesterday",source:"https://www.vhv.rs/dpng/d/454-4544542_doug-headshot-circular-circular-image-of-a-person.png"},
        {name:"Maria Galu ",status:"tuesday",source:"https://www.pngfind.com/pngs/m/3-30232_hillary-rodham-clinton-circle-black-background-circular-image.png"},
        {name:"Chari bulle ",status:"monday",source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUOAUwMwx7YXvP-dxWyHAz4h-YBwadBmoh0QHOvRB0ULedIm8ACcIOd0TlueRikE68jU4&usqp=CAU"},
        {name:" Gausian causg",status:"recentli",source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB_mpdTkAOjNZ8_N9SNFkzq7XCHXP81acoXPoHCRNi1o7IQk3EMPXwcA7kEVjw9jMHXos&usqp=CAU"},
        {name:" Geaogia ",status:"today",source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuTlDkqTub-W9PFYdpllQLu8sNPSS_YgMUn5O-yIsotI4jYHbYlk-TgUCo9mZNmhC0EU&usqp=CAU"},
        ];


  return (
        <div style={{width:"92%",border:"3px solid #36454F",borderRadius:'10px',backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))" }}>
            <Accordion style={{borderRadius:'0'}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>My friends</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ItemList2 items={items}/>
                </AccordionDetails>
            </Accordion>
        </div>
    
  );
}