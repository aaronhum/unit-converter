import React from "react";
import { Tab, Tabs } from "carbon-components-react";
import LengthConverter from "../converters/LengthConverter";
import TemperatureConverter from "../converters/TemperatureConverter";
import AreaConverter from "../converters/AreaConverter";
import VolumeConverter from "../converters/VolumeConverter";
import MassConverter from "../converters/MassConverter";
import TimeConverter from "../converters/TimeConverter";
import MemoryConverter from "../converters/MemoryConverter";
import {
  Area20,
  ConnectionSignal20,
  Hourglass20,
  RulerAlt20,
  Save20,
  Scales20,
  Temperature20,
  WatsonHealthSubVolume20,
} from "@carbon/icons-react";
import "./ConverterContainer.css";
import FrequencyConverter from "../converters/FrequencyConverter";

const ConverterContainer = () => {
  return (
    <div>
      <Tabs type="container">
        <Tab
          id="length"
          label={
            <div className="LabelText">
              <p>
                <RulerAlt20 className="LengthIcon" />
                Length
              </p>
            </div>
          }
        >
          <LengthConverter />
        </Tab>
        <Tab
          id="temperature"
          label={
            <div className="LabelText">
              <p>
                <Temperature20 className="TemperatureIcon" />
                Temperature
              </p>
            </div>
          }
        >
          <TemperatureConverter />
        </Tab>
        <Tab
          id="area"
          label={
            <div className="LabelText">
              <p>
                <Area20 className="AreaIcon" />
                Area
              </p>
            </div>
          }
        >
          <AreaConverter />
        </Tab>
        <Tab
          id="volume"
          label={
            <div className="LabelText">
              <p>
                <WatsonHealthSubVolume20 className="VolumeIcon" />
                Volume
              </p>
            </div>
          }
        >
          <VolumeConverter />
        </Tab>
        <Tab
          id="weight"
          label={
            <div className="LabelText">
              <p>
                <Scales20 className="MassIcon" />
                Mass
              </p>
            </div>
          }
        >
          <MassConverter />
        </Tab>
        <Tab
          id="time"
          label={
            <div className="LabelText">
              <p>
                <Hourglass20 className="TimeIcon" />
                Time
              </p>
            </div>
          }
        >
          <TimeConverter />
        </Tab>
        <Tab
          id="memory"
          label={
            <div className="LabelText">
              <p>
                <Save20 className="MemoryIcon" />
                Memory
              </p>
            </div>
          }
        >
          <MemoryConverter />
        </Tab>
        <Tab
          id="memory"
          label={
            <div className="LabelText">
              <p>
                <ConnectionSignal20 className="FrequencyIcon" />
                Frequency
              </p>
            </div>
          }
        >
          <FrequencyConverter />
        </Tab>
      </Tabs>
    </div>
  );
};

export default ConverterContainer;
