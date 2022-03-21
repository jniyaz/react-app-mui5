import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./components/Navbar";

const useStyles = makeStyles((theme) => ({
  button: {
    ...theme.customErrBtn,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
