import React from "react";
import Card from "./Components/Card";
import List from "./Components/List";
import Heading from "./Components/Heading";
import TopBar from "./Components/TopBar";

const App = () => {
  return (
    <div className="grid bg-slate-200 text-slate-800 grid-rows-2 place-content-center h-screen w-screen">
      <TopBar>
        <Heading>Unit Converter</Heading>
      </TopBar>
      <List>
        <Card heading="Centimeter" content="100" />
      </List>
    </div>
  );
};

export default App;
