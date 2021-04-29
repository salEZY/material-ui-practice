import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";
import { ComponentWrapper } from "../Styled/styled";
// import { ThemeProvider } from "styled-components";
// import { GlobalStyles } from "./components/Styled";
// import { StyledSection } from "../Styled/styled";

const Switcher = () => {
  const [check, setCheck] = useState({
    checkedA: true
  });
  const [theme, setTheme] = useState(true);
  const handleChange = (event) => {
    setCheck({ ...check, [event.target.name]: event.target.checked });
  };
  return (
    <ComponentWrapper>
      <Switch
        checked={check.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    
    </ComponentWrapper>
  );
};

export default Switcher;
