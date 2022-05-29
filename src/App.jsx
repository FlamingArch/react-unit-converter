import React, { useState, useEffect } from "react";

import Heading from "./Components/Heading";
import TopBar from "./Components/TopBar";
import Page from "./Components/Page";

import _ from "lodash";

import LengthPage from "./Components/Pages/Length";

const App = () => {
  return (
    <Page>
      <TopBar>
        <Heading>Unit Converter</Heading>
      </TopBar>
      <LengthPage />
    </Page>
  );
};

export default App;
