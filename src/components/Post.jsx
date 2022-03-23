import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(3),
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
}));

const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://v4.mui.com/static/images/cards/contemplative-reptile.jpg"
          title="my post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            Post Title
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quia
            libero, illo animi consectetur asperiores cum praesentium, suscipit
            ex corporis at beatae, aliquid maiores tempora optio magni
            aspernatur voluptas fugit.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default Post;
