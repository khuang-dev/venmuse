import { createStyles } from "@material-ui/core/styles";

const styles = theme =>
  createStyles({
    spinner: {
      alignSelf: "center"
    },

    fullLoader: {
      display: "flex",
      flexFlow: "column wrap",
      margin: "auto"
    },
    container: {
      display: "flex",
      marginTop: "200px",
      alignContent: "center",
      width: "100%",
      height: "100%"
    }
  });

export default styles;
