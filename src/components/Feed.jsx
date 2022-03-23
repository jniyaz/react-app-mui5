import { Container, makeStyles } from "@material-ui/core";
import Add from "./Add";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Post />
      ))}
      <Add />
    </Container>
  );
};

export default Feed;
