import React from "react";
import { Tab, Tabs } from "carbon-components-react";
import LengthConverter from "../converters/LengthConverter";
import TemperatureConverter from "../converters/TemperatureConverter";
import AreaConverter from "../converters/AreaConverter";
import VolumeConverter from "../converters/VolumeConverter";
import WeightConverter from "../converters/WeightConverter";
import TimeConverter from "../converters/TimeConverter";
import MemoryConverter from "../converters/MemoryConverter";
import SpeedConverter from "../converters/SpeedConverter";
import DensityConverter from "../converters/DensityConverter";

const ConverterContainer = () => {
  return (
    <div>
      <Tabs type="container">
        <Tab id="length" label="Length">
          <LengthConverter />
        </Tab>
        <Tab id="temperature" label="Temperature">
          <TemperatureConverter />
        </Tab>
        <Tab id="area" label="Area">
          <AreaConverter />
        </Tab>
        <Tab id="volume" label="Volume" disabled>
          <VolumeConverter />
        </Tab>
        <Tab id="weight" label="Weight" disabled>
          <WeightConverter />
        </Tab>
        <Tab id="time" label="Time" disabled>
          <TimeConverter />
        </Tab>
        <Tab id="memory" label="Memory" disabled>
          <MemoryConverter />
        </Tab>
        <Tab id="liquid-volume" label="Liquid Volume" disabled>
          <SpeedConverter />
        </Tab>
        <Tab id="density" label="Density" disabled>
          <DensityConverter />
        </Tab>
      </Tabs>
    </div>
  );
};

export default ConverterContainer;
