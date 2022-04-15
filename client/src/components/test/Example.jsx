import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import SpeedDial from '@mui/material/SpeedDial';
// import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FacebookOutlined from '@material-ui/icons/Facebook';
import FavoriteIcon from '@material-ui/icons/Favorite';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
  },
}));

const actions = [
  { icon: <FacebookOutlined />, name: 'Copy' },
  { icon: <FacebookOutlined />, name: 'Save' },
  { icon: <FacebookOutlined />, name: 'Print' },
  { icon: <FacebookOutlined />, name: 'Share' },
];

export default function PlaygroundSpeedDial() {
  const [direction, setDirection] = React.useState('up');


  return (
    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
      <FormControl component="fieldset" sx={{ mt: 1, display: 'flex' }}>
      </FormControl>
      <Box sx={{ position: 'relative', mt: 3, height: 320 }}>
        <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          icon={<FavoriteIcon />}
          direction={direction}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </StyledSpeedDial>
      </Box>
    </Box>
  );
}
