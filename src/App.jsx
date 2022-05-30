import React, { useState, useEffect } from "react";

import Heading from "./Components/Heading";
import TopBar from "./Components/TopBar";
import Page from "./Components/Page";

import _ from "lodash";

import LengthPage from "./Components/Pages/Length";
import TabBar, { Tab, TabView, TabViewProvider } from "./Components/TabView";
import { ScaleIcon } from "@heroicons/react/solid";

const App = () => {
  const iconStyles = "w-4 h-4 text-white";

  return (
    <Page>
      <TabViewProvider>
        <TopBar>
          <Heading>Unit Converter</Heading>
          <TabBar>
            <Tab icon={<ScaleIcon className={iconStyles} index={0} />} />
            <Tab icon={<ScaleIcon className={iconStyles} index={1} />} />
            <Tab icon={<ScaleIcon className={iconStyles} index={2} />} />
            <Tab icon={<ScaleIcon className={iconStyles} index={3} />} />
            <Tab icon={<ScaleIcon className={iconStyles} index={4} />} />
          </TabBar>
        </TopBar>
        <TabView>
          <LengthPage />
          <Area />
          <LengthPage />
          <LengthPage />
        </TabView>
      </TabViewProvider>
    </Page>
  );
};

export default App;
