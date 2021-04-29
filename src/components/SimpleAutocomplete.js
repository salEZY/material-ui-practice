import React from "react";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

const theList = [
  { name: "Aleksandar Bobic", value: 100 },
  { name: "Aleksandar Makedonski", value: 99 },
  { name: "Aleksandar Vucic", value: -1 },
  { name: "Aleksandar Lukasenko", value: -1 },
];

const SimpleAutocomplete = () => {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={theList}
      getOptionLabel={(option) =>
        `Name: ${option.name}, value: ${option.value}`
      }
      style={{ width: 500, margin: "2rem auto" }}
      renderInput={(params) => (
        <TextField {...params} label="Aleksandri" variant="filled" />
      )}
    ></Autocomplete>
  );
};

export default SimpleAutocomplete;
