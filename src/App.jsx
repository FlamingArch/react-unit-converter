import React, { useState, useEffect } from "react";
import { Card, InputCard } from "./Components/Card";
import List from "./Components/List";
import Heading from "./Components/Heading";
import TopBar from "./Components/TopBar";
import Page from "./Components/Page";
import DropDown from "./Components/DropDown";
import Button from "./Components/Button";

import _ from "lodash";

import Lengths from "./Model/Length";

import { ChevronDownIcon } from "@heroicons/react/solid";

const App = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState("Meters");
  const [value, setValue] = useState(0);

  const [result, setResult] = useState({
    meters: 0,
    centimeters: 0,
    kilometers: 0,
    miles: 0,
    inches: 0,
    yards: 0,
  });
  const lengthHandler = new Lengths();

  const setUnit = (unit) => {
    setSelectedUnit(unit);
    setDropdownVisible(!dropdownVisible);
  };

  useEffect(() => {
    lengthHandler.setValue(selectedUnit, value);
    setResult({
      meters: lengthHandler.getValue("meters"),
      centimeters: lengthHandler.getValue("centimeters"),
      kilometers: lengthHandler.getValue("kilometers"),
      miles: lengthHandler.getValue("miles"),
      inches: lengthHandler.getValue("inches"),
      yards: lengthHandler.getValue("yards"),
    });
  }, [value, selectedUnit]);

  return (
    <Page>
      <TopBar>
        <Heading>Unit Converter</Heading>
      </TopBar>
      <List>
        <InputCard isInvalidInput={true} value={value} onchange={setValue}>
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
        <Card heading="Meters" content={result.meters} />
        <Card heading="Centimeters" content={result.centimeters} />
        <Card heading="Kilometers" content={result.kilometers} />
        <Card heading="Miles" content={result.miles} />
        <Card heading="Inches" content={result.inches} />
        <Card heading="Yards" content={result.yards} />
      </List>
    </Page>
  );
};

export default App;
