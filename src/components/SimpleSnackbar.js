import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Snackbar, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles({
  snackbar: {
    fontSize: "2rem",
    margin: "2rem auto",
  },
});

const SimpleSnackbar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;

    setOpen(false);
  };

  return (
    <div className={classes.snackbar}>
      <Button onClick={handleOpen}>OPEN!</Button>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="This a snackbar!"
        action={
          <React.Fragment>
            <Button color="secondary" size="medium" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="primary"
              onClick={handleClose}
            >
              <CloseIcon size="medium" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};

export default SimpleSnackbar;
