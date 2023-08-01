import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Navbar3 from './Navbar3';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Comment from './Comment';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import BasicTooltip from './BasicTooltip';
import Tooltip from '@mui/material/Tooltip';


const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  
  return (
    <Card sx={{ width:"90%",marginLeft:"5%",marginTop:"20px", backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))",border:"3px solid #36454F",borderRadius:"10px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtrIa8i1BsfCxmPoNRIDgnSHA_25LCL5Bl1w&usqp=CAU"/>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Lucky Andress"
        subheader="12 minute ago On 3D Stack contributor"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      
      <CardMedia
        component="img"
        height="280"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA2Ym1cjUgUdRgNGUo3eaJnWparlxa8pJ12w&usqp=CAU"
        alt="Paella dish"
      />
      <Navbar3/>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title="Like">
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Share more">
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </Tooltip>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>

      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Box style={{display:"flex",justifyContent:"space-between"}}>
            <Typography style={{marginBottom:"20px"}}>View Comment </Typography>
            <Typography style={{marginBottom:"20px"}}><BasicTooltip title="Add Comment"/></Typography>
          </Box>
          
          <Comment/>
        </CardContent>
      </Collapse>
    </Card>
  );
}
