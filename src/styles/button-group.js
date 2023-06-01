import {
    makeStyles,
    ButtonGroup as MaterialButtonGroup
  } from "@material-ui/core";
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginTop:theme.spacing(1),
      "& > *:not(:last-child)": {
        marginRight: theme.spacing(1),
        
      }
    }
  }));
  
  export const ButtonGroup = ({ children }) => {
    const classes = useStyles();
    return <div className={classes.root}>{children}</div>;
  };