import React, { useState } from "react";
import {
  Grid,
  Row,
  Column,
  NumberInput,
  RadioButton,
  RadioButtonGroup,
} from "carbon-components-react";
import timeConversion from "../../utils/timeConversion";
import "./converter.css";

const TimeConverter = () => {
  const [baseUnit, setBaseUnit] = useState("CenturiesB");
  const [conversionUnit, setConversionUnit] = useState("CenturiesC");
  const [input, setInput] = useState(1);
  const output = timeConversion(baseUnit, conversionUnit, input);
  return (
    <Grid>
      <Row>
        <Column sm={1} md={1} lg={2} className="RadioButtons">
          <RadioButtonGroup
            labelText="Base Unit"
            legendText="Base Unit"
            orientation="vertical"
            defaultSelected={baseUnit}
            onChange={(selected) => setBaseUnit(selected)}
          >
            <RadioButton
              labelText="Centuries"
              value="CenturiesB"
              id="CenturiesB"
            />
            <RadioButton labelText="Days" value="DaysB" id="DaysB" />
            <RadioButton labelText="Decades" value="DecadesB" id="DecadesB" />
            <RadioButton
              labelText="Femtoseconds"
              value="FemtosecondsB"
              id="FemtosecondsB"
            />
            <RadioButton
              labelText="Fortnights"
              value="FortnightsB"
              id="FortnightsB"
            />
            <RadioButton labelText="Hours" value="HoursB" id="HoursB" />
            <RadioButton
              labelText="Microseconds"
              value="MicrosecondsB"
              id="MicrosecondsB"
            />
            <RadioButton
              labelText="Millenium"
              value="MilleniumB"
              id="MilleniumB"
            />
            <RadioButton
              labelText="Milliseconds"
              value="MillisecondsB"
              id="MillisecondsB"
            />
            <RadioButton labelText="Minutes" value="MinutesB" id="MinutesB" />
            <RadioButton labelText="Months" value="MonthsB" id="MonthsB" />
            <RadioButton
              labelText="Nanoseconds"
              value="NanosecondsB"
              id="NanosecondsB"
            />
            <RadioButton
              labelText="Picoseconds"
              value="PicosecondsB"
              id="PicosecondsB"
            />
            <RadioButton labelText="Seconds" value="SecondsB" id="SecondsB" />
            <RadioButton
              labelText="Sidereal Years"
              value="SiderealYearsB"
              id="SiderealYearsB"
            />
            <RadioButton labelText="Weeks" value="WeeksB" id="WeeksB" />
            <RadioButton labelText="Years" value="YearsB" id="YearsB" />
          </RadioButtonGroup>
        </Column>
        <Column sm={0} md={3} lg={4}>
          <NumberInput
            id="baseUnitInput1"
            min={0}
            value={input}
            label="Base Unit Input"
            helperText="Enter your base unit input here"
            invalidText="Number is invalid, positive numbers only"
            onChange={(e) => setInput(e.imaginaryTarget.value)}
          />
        </Column>
        <Column sm={0} md={3} lg={4}>
          <NumberInput
            id="conversionUnitOutput"
            value={output}
            label="Conversion Unit Output"
            helperText="Converted unit output"
            readOnly
          />
        </Column>
        <Column sm={2} md={0} lg={0}>
          <div style={{ marginBottom: 10 }}>
            <NumberInput
              id="baseUnitInput1"
              min={0}
              value={input}
              label="Base Unit Input"
              helperText="Enter your base unit input here"
              invalidText="Number is invalid, positive numbers only"
              onChange={(e) => setInput(e.imaginaryTarget.value)}
            />
          </div>

          <NumberInput
            id="conversionUnitOutput"
            value={output}
            label="Conversion Unit Output"
            helperText="Converted unit output"
            readOnly
          />
        </Column>
        <Column sm={1} md={1} lg={2} className="RadioButtons">
          <RadioButtonGroup
            labelText="Conversion Unit"
            legendText="Conversion Unit"
            orientation="vertical"
            defaultSelected={conversionUnit}
            onChange={(selected) => setConversionUnit(selected)}
          >
            <RadioButton
              labelText="Centuries"
              value="CenturiesC"
              id="CenturiesC"
            />
            <RadioButton labelText="Days" value="DaysC" id="DaysC" />
            <RadioButton labelText="Decades" value="DecadesC" id="DecadesC" />
            <RadioButton
              labelText="Femtoseconds"
              value="FemtosecondsC"
              id="FemtosecondsC"
            />
            <RadioButton
              labelText="Fortnights"
              value="FortnightsC"
              id="FortnightsC"
            />
            <RadioButton labelText="Hours" value="HoursC" id="HoursC" />
            <RadioButton
              labelText="Microseconds"
              value="MicrosecondsC"
              id="MicrosecondsC"
            />
            <RadioButton
              labelText="Millenium"
              value="MilleniumC"
              id="MilleniumC"
            />
            <RadioButton
              labelText="Milliseconds"
              value="MillisecondsC"
              id="MillisecondsC"
            />
            <RadioButton labelText="Minutes" value="MinutesC" id="MinutesC" />
            <RadioButton labelText="Months" value="MonthsC" id="MonthsC" />
            <RadioButton
              labelText="Nanoseconds"
              value="NanosecondsC"
              id="NanosecondsC"
            />
            <RadioButton
              labelText="Picoseconds"
              value="PicosecondsC"
              id="PicosecondsC"
            />
            <RadioButton labelText="Seconds" value="SecondsC" id="SecondsC" />
            <RadioButton
              labelText="Sidereal Years"
              value="SiderealYearsC"
              id="SiderealYearsC"
            />
            <RadioButton labelText="Weeks" value="WeeksC" id="WeeksC" />
            <RadioButton labelText="Years" value="YearsC" id="YearsC" />
          </RadioButtonGroup>
        </Column>
      </Row>
    </Grid>
  );
};
export default TimeConverter;
