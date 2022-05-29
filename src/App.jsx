import React, { useState } from "react";
import { Card, InputCard } from "./Components/Card";
import List from "./Components/List";
import Heading from "./Components/Heading";
import TopBar from "./Components/TopBar";
import Page from "./Components/Page";
import DropDown from "./Components/DropDown";

const App = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <Page>
      <TopBar>
        <Heading>Unit Converter</Heading>
      </TopBar>
      <List>
        <InputCard></InputCard>
        <Card heading=" " content="" />
        <Card heading="Centimeter" content="100" />
        <Card heading="Centimeter" content="100" />
        <Card heading="Centimeter" content="100" />
        <Card heading="Centimeter" content="100" />
        <Card heading="Centimeter" content="100" />
      </List>
    </Page>
  );
};

export default App;
