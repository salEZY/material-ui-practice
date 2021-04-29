import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

// const useStyles = makeStyles((theme) => ({
//     container: {
//       display: 'flex',
//       flexWrap: 'wrap',
//     },
//     textField: {
//       marginLeft: theme.spacing(1),
//       marginRight: theme.spacing(1),
//       width: 200,
//     },
//   }));

const MyDatePicker = () => {
  // const classes = useStyles();
  return (
    <form noValidate>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        // className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
};

export default MyDatePicker;

// className={classes.container}
