import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import  BasicButtons  from 'Component/Button/Button';
import { Link } from 'react-router-dom';

export default function RelatedCollectionsCard() {
  return (
    <Grid item xs={12} md={6} lg={4} sx={{ maxWidth: '500px ! important' }}>
      <Box>
        <Link to="/">
          <Grid
            container
            spacing={1}
            sx={{
              height: '300px',
              overflow: 'hidden',
              padding: '8px',
              '&:hover': {
                filter: 'contrast(0.5)',
              },
            }}
          >
            <Grid item xs={8} sx={{ height: '100%' }}>
              <img
                src="https://images.unsplash.com/photo-1500106029603-6402f3cc585c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTMwOTAwNnx8ZW58MHx8fHw%3D&dpr=1&auto=format&fit=crop&w=294&q=60"
                alt="img"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '7px 0 0 7px',
                }}
              />
            </Grid>
            <Grid item xs={4} sx={{ height: '100%' }}>
              <img
                src="https://images.unsplash.com/photo-1566977959555-6ccc461eb955?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ODk0fHxlbnwwfHx8fA%3D%3D&dpr=1&auto=format&fit=crop&w=126&q=60"
                alt="img"
                style={{
                  height: '49%',
                  width: '100%',
                  borderRadius: '0 7px 0 0 ',
                }}
              />
              <img
                src="https://images.unsplash.com/photo-1516490981167-dc990a242afe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ODk0fHxlbnwwfHx8fA%3D%3D&dpr=1&auto=format&fit=crop&w=126&q=60"
                alt="img"
                style={{
                  height: '49%',
                  width: '100%',
                  borderRadius: '0 0 7px 0',
                }}
              />
            </Grid>
          </Grid>
        </Link>
      </Box>
      <Box>
        <Typography
          variant="body1"
          sx={{ fontSize: '18px', fontWeight: '600', padding: '10px 0' }}
        >
          Earth & Planets
        </Typography>
        <Typography sx={{ color: '#767676', fontSize: '14px', margin: '0 0 12px' }}>
          {'wored'} . Curated by {<Link to="/">{'text'}</Link>}
        </Typography>
        {/* <BasicButtons to="/">click</BasicButtons> <BasicButtons to="/">click</BasicButtons>{' '} */}
        {/* <BasicButtons to="/">click</BasicButtons> */}
      </Box>
    </Grid>
  );
}
