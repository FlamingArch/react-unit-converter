import React from "react";

import LengthIcon from './Icons/length.svg'
import AreaIcon from './Icons/area.svg'
import VolumeIcon from './Icons/volume.svg'
import TemperatureIcon from './Icons/temperature.svg'

import LengthPage from './Components/Pages/Length'
import AreaPage from './Components/Pages/Area'
import VolumePage from './Components/Pages/Volume'
import TemperaturePage from './Components/Pages/Temperature'

import Navigation from './Components/Views/Navigation'

const App = () => {

  const navigationItems = [
    { icon: LengthIcon, label: "Length" },
    { icon: AreaIcon, label: "Area" },
    { icon: VolumeIcon, label: "Volume" },
    { icon: TemperatureIcon, label: "Temp" },
  ]

  return (
    <Navigation items={navigationItems}>
      <LengthPage />
      <AreaPage />
      <VolumePage />
      <TemperaturePage />
    </Navigation >
  );
};

export default App;
