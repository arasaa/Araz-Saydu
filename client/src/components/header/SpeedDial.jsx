import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  '&.MuiSpeedDial-directionDown': {
  },
}));

const actions = [
  { icon: <a href="https://github.com/arasaa" target="_blank"> <GitHubIcon /></a>, name: 'Github' },
  { icon: <a href="https://www.linkedin.com/in/araz-saydu-594940198/" target="_blank"> <LinkedInIcon /></a>, name: 'Linkedin' },
  { icon: <a href="https://twitter.com/home" target="_blank"><TwitterIcon /></a>, name: 'Twitter' },
  { icon: <a href="https://t.me/Aras_Ali1"><TelegramIcon color="secondary" target="_blank"/></a>, name: 'Telegram' },
];

export default function PlaygroundSpeedDial() {
  const [direction] = React.useState('down');
  return (
    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
      <FormControl component="fieldset" sx={{ mt: 1, display: 'flex' }}>
      </FormControl>
      <Box sx={{ position: 'relative', mt: -1.4, height: 320, backgroundColo: 'primary.main', }}>
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
