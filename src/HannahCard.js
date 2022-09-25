import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import img from './static/t4sg_logo.jpg';

export default function HannahCard() {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component="img"
          sx={{
            // 16:9
            // pt: '56.25%',
            height: '100%',
          }}
          src={img}
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {/* Name here */}
            Hannah Kim
          </Typography>
          <Typography>
            {/* Harvard intro here */}
            Sophomore in Currier studying CS+Gov. I love the HUDS mango sticky rice.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}