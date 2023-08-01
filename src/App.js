
import './App.css';
import * as React from 'react';
import { Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import BasicList from './component/BasicList';
import BasicList2 from './component/BasicList2';
import BasicList3 from './component/BasicList3';
import Divider from '@mui/material/Divider';
import ItemList from './component/ItemList';
import Navbar from './component/Navbar';
import Navbar2 from './component/Navbar2';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import BasicAccordion from './component/BasicAccordion';
import BasicAccordion2 from './component/BasicAccordion2';
import AreaCard from './component/AreaCard';
import RecipeReviewCard from './component/RecipeReviewCard';
import {CssBaseline} from '@mui/material';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });



const mainstyle ={
  display:"flex",
  flexDirection:"row",
}
const style1={
  width:"20vw",
  backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))",
  border:"3px solid #36454F" ,
  paddingLeft:"5px"
}
const style4={
  display:"flex",
  height:"10vh",
  alignItems:"center",
  background:"dark"
}
const style5={
  fontWeight:502,
  fontSize:"30px",
  color:"#6528F7"
}
const style6={
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  width:"100%",
  height:"10vh"
}
const style7={
  height:"70%",
  width:"90%"
}
const style2={
  width:"80vw",
}
const style3={
  width:"25%",
}
const style9={
  width:"70%"
}
const style8={
  width:"100%"
}


const  App = () => {

  const items=[['Figma Maintenance','111'],['Blender Update','111'],['StackOverFlow Server','111'],['JavaScript New','111'],['React','111']];
  return (
    

    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box className="box" style={mainstyle}>   
          <Box className="box1" style={style1}>
            <Box className="box4" sx={{ display:"flex",height:"10vh", alignItems:"center",}}>
              <Avatar
                alt="Remy Sharp"
                src="https://st4.depositphotos.com/6489488/22060/v/450/depositphotos_220607674-stock-illustration-let-explore-beauty-singapore-statue.jpg"
                sx={{ width: 40, height: 40,margin:"10px" }}
              />
              <Typography style={style5}>Utkarsh</Typography>
            </Box>
            <Box sx={{ display:"flex",height:"10vh", alignItems:"center",justifyContent:"center",width:"100%",margin:"10px auto"}}>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" style={style7} />
            </Box>
            <BasicList/>
            <Divider sx={{ borderBottomWidth: 1,margin: '0 10%' }} />
            <BasicList2/>
            <Divider sx={{ borderBottomWidth: 1,margin: '0 10%' }} />
            <BasicList3/>
          </Box>
        
        
        <Box className="box2"  style={{width:"80vw"}}>
          <Box style={{width:"100%"}}>
            <Navbar/>
          </Box>
          <Box style={{width:"100%",display:"flex",paddingTop:"20px"}}>
            <Box className="box3"  style={{width:"70%"}}>
              <Navbar2/>
              <RecipeReviewCard/> 
            </Box>
            <Box className="box10"  style={{width:"29%",paddingTop:"20px",marginRight:"1%"}}>
              <Box style={{width:"100%",display:"flex",justifyContent:"center"}}>
                <BasicAccordion/>
              </Box>
              <Box style={{width:"100%",display:"flex",justifyContent:"center",marginTop:"20px"}}>
                <AreaCard/>
              </Box>
              <Box style={{width:"100%",display:"flex",justifyContent:"center",marginTop:"20px"}}>
                <BasicAccordion2/>
              </Box>
            </Box>
          </Box>  
        </Box>
      </Box>
    </ThemeProvider>
    
  );
}

export default App;
