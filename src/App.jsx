import React, { useState } from "react";
import { Card, InputCard } from "./Components/Card";
import List from "./Components/List";
import Heading from "./Components/Heading";
import TopBar from "./Components/TopBar";
import Page from "./Components/Page";
import DropDown from "./Components/DropDown";
import Button from "./Components/Button";

import { ChevronDownIcon } from "@heroicons/react/solid";

const App = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState("Meters");

  const setUnit = (unit) => {
    setSelectedUnit(unit);
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <Page>
      <TopBar>
        <Heading>Unit Converter</Heading>
      </TopBar>
      <List>
        <InputCard>
          <Button onClick={() => setDropdownVisible(true)}>
            {selectedUnit} <ChevronDownIcon className="w-5 h-5" />
          </Button>
          <DropDown
            visible={dropdownVisible}
            items={[
              { action: () => setUnit("Meters"), label: "Meters" },
              { action: () => setUnit("Centimeters"), label: "Centimeters" },
              { action: () => setUnit("Kilometers"), label: "Kilometers" },
              { action: () => setUnit("Miles"), label: "Miles" },
              { action: () => setUnit("Inches"), label: "Inches" },
              { action: () => setUnit("Yards"), label: "Yards" },
            ]}
          />
        </InputCard>
        <Card heading=" " content="" />
        <Card heading="Meters" content="100" />
        <Card heading="Centimeters" content="100" />
        <Card heading="Kilometers" content="100" />
        <Card heading="Miles" content="100" />
        <Card heading="Inches" content="100" />
        <Card heading="Yards" content="100" />
      </List>
    </Page>
  );
};

export default App;
