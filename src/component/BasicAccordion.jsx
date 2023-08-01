import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ItemList from './ItemList';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


export default function BasicAccordion() {

    const items=[['Figma Maintenance','111'],['Blender Update','111'],['StackOverFlow Server','111'],['JavaScript New','111'],['React','111']];


  return (
        <div style={{width:"92%",border:"3px solid #36454F",borderRadius:'10px',backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))" }}>
            <Accordion style={{borderRadius:'10px'}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>Today Trending</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ItemList items={items}/>
                </AccordionDetails>
            </Accordion>
        </div>
    
  );
}