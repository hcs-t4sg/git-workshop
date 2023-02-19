import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import img from './static/t4sg_logo.jpg';

export default function MayaCard() {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
           component="img"
           sx={{
             // 16:9
             pt: '5%',
           }}
           style={{ width: '80%', margin: 'auto' }}
           src={img}
           alt="t4sg logo"
         />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {/* Name here */}
            Maya Nicole Dummett
          </Typography>
          <Typography>
            {/* Harvard intro here */}
            Hi! I am Maya Dummett. I like eating apples and oranges and I am a big fan of the number 24.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}