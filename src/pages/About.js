// import components from material ui
import { Box } from '@mui/material';

// import components
import Description from '../components/Description';
import Navbar from '../components/Navbar';

// props
const color = 'common.black';
const buttonColor = 'black';
const menuIcon = 'default';

const About = () => {
  return (
    <Box>
      {/* navigation bar */}
      <Navbar color={color} buttonColor={buttonColor} menuIcon={menuIcon} />

      {/* about information */}
      <Description />
    </Box>
  );
};

export default About;
