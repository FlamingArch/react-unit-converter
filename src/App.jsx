import React from "react";
import Rail from "./Components/Rail";

const App = () => {
  const iconStyles = "w-4 h-4 text-white";

  const navigtionItems = [
    { icon: LengthIcon, label: "Length" },
    { icon: AreaIcon, label: "Area" },
    { icon: VolumeIcon, label: "Volume" },
    { icon: TemperatureIcon, label: "Temperature" },
  ]

  return (
    <RailNavigation items={navigationIcons}>
      <LengthPage/>
      <AreaPage/>
      <VolumePage/>
      <TemperaturePage/>
    </RailNavigation >
  );
};

export default App;
