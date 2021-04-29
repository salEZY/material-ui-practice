import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Select, FormControl, MenuItem } from "@material-ui/core";

const useStyles = makeStyles({
  formControl: {
    backgroundColor: "gray",
    width: "50%",
    marginTop: "2rem",
  },
  select: {
    fontSize: "45px",
  },
  menuitem: {
    fontStyle: "italic",
  },
});

const SimpleSelect = () => {
  const classes = useStyles();
  const [name, setName] = React.useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  console.log(name);
  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={name}
          onChange={handleName}
          className={classes.select}
        >
          <MenuItem value="Choose your name" className={classes.menuitem}>
            Choose your name
          </MenuItem>
          <MenuItem value="Sale">Sale</MenuItem>
          <MenuItem value="Aleksandar" className={classes.menuitem}>
            Aleksandar
          </MenuItem>
          <MenuItem value="Aca">Aca</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SimpleSelect;
