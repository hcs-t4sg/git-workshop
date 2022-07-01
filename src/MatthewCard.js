import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import img from './static/t4sg_logo.jpg';


export default function MatthewCard() {
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
            Matthew Su
          </Typography>
          <Typography>
            Class of 2024, Chemistry/CS. Senior SWE for T4SG. I draw hexagons for fun.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}