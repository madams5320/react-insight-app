// import components from material ui
import { Divider, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';

const Description = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '120px',
          }}
        >
          {/* title */}
          <Typography variant="h4" textAlign="center" mb={3}>
            About
          </Typography>
          <Divider sx={{ width: '50%' }} />

          {/* about description */}
          <Typography textAlign="center" mt={7}>
            Ullamco laboris et irure excepteur. Irure dolor minim incididunt
            officia duis ex eu nostrud dolor velit in non consectetur
            incididunt. Consequat ad incididunt reprehenderit elit est in
            voluptate. Cillum reprehenderit exercitation labore ut in tempor
            nostrud non id nulla velit voluptate aliqua et. Laborum mollit
            veniam incididunt est nisi veniam eiusmod nostrud consequat pariatur
            do do reprehenderit. Occaecat pariatur ad nisi aliquip excepteur
            dolore ad mollit elit voluptate dolor sit. Excepteur dolore
            reprehenderit sint anim mollit esse. Ipsum culpa deserunt irure sit
            cillum tempor. Fugiat tempor nisi deserunt ut. Nisi culpa ad Lorem
            irure qui. Eu reprehenderit reprehenderit duis minim pariatur quis
            ut anim. Ea eu id fugiat cupidatat sit esse enim velit quis id
            veniam. Dolor ad pariatur non velit culpa est et proident velit.
            Ipsum nostrud dolore reprehenderit sit enim occaecat voluptate
            cillum consequat sint. Consequat id dolore laborum sunt excepteur
            minim do consequat culpa ut aliqua ea duis. Commodo cupidatat
            adipisicing reprehenderit et aliquip cupidatat elit minim
            adipisicing elit. Elit officia id enim consequat nulla ullamco sit
            dolore qui sit cupidatat exercitation. Laborum est consectetur
            veniam amet veniam non sunt nulla laborum reprehenderit eiusmod in.
            Esse id elit tempor mollit consequat. Enim velit id ullamco amet
            ipsum et pariatur culpa qui proident cupidatat aute. Aute incididunt
            et veniam fugiat in in est reprehenderit.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Description;
