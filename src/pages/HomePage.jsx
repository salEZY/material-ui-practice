import React from "react";
import MyCard from "../components/MyCard";
import MyDatePicker from "../components/MyDatePicker";
import MyRadioButton from "../components/MyRadioButton";
import MyTextField from "../components/MyTextField";
import Switcher from "../components/Switcher";

const HomePage = () => {
  return (
    <div>
      <div className="App">
        <Switcher />
        <MyTextField />
        <MyRadioButton />
        <MyDatePicker />
      </div>
      <div className="App">
        <MyCard />
      </div>
    </div>
  );
};

export default HomePage;
