import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { ComponentWrapper } from "../Styled/styled";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const MyTextField = () => {
  const [fullname, setFullname] = useState({ name: "", lastname: "" });
  const handleInput = (e) => {
    const { name, value } = e.target;

    setFullname((previous) => {
      return {
        ...previous,
        [name]: value,
      };
    });
  };
  return (
    <div>
      <form noValidate autoComplete="off">
          <ComponentWrapper>
        <TextField
          id="standard-basic"
          label="Name"
          type="text"
          name="name"
          value={fullname.name}
          onChange={handleInput}
        />
        </ComponentWrapper>
        <TextField
          id="standard-basic"
          label="LastName"
          type="text"
          name="lastname"
          value={fullname.lastname}
          onChange={handleInput}
        />
      </form>
    </div>
  );
};

export default MyTextField;
