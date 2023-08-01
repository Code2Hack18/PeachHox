import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function BasicTooltip(props) {
  return (
    <Tooltip title={props.title=="Add Comment" ? "Add Comment" :"hello"}>
      <IconButton>
        <MapsUgcIcon/>
      </IconButton>
    </Tooltip>
  );
}