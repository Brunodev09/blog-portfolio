import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// import Image from "../../gordoViado.jpg";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 340,
  },
  btn1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default function MediaCard(props) {
  const classes = useStyles();
  let { post } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          // image={Image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { post.title }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            { post.body.length < 150 ? post.body : `${post.body.substring(0, 150)}...` }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.btn1}>
        <Button size="small" color="primary">
          Read more
        </Button>
      </CardActions>
    </Card>
  );
}