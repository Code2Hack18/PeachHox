import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });



export default function AreaCard() {
  return (
        <Card sx={{ maxWidth: 345,width:"92%" ,border:"3px solid #36454F",borderRadius:'10px',backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))" }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="180"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNSOMCXMhSBiq4rKnjF1UOzQAf5PJ2VK1TQEqANfvzkqzcmaj7-D7J4y7QLKG30Ukah3M&usqp=CAU"
                alt="green iguana"
                />
                <CardContent >
                <Typography gutterBottom variant="h5" component="div" >
                    Figma Designer
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    1425 member 125 post today
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" style={{width:"90%",margin:"auto 5%",border:"1px solid yellow"}}>
                Join Community
                </Button>
            </CardActions>

        </Card>
  );
}
