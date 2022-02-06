import React, { useState } from "react";
import {
  Grid,
  Row,
  Column,
  NumberInput,
  RadioButton,
  RadioButtonGroup,
} from "carbon-components-react";
import lengthConversion from "../../utils/lengthConversion";

const TimeConverter = () => {
  const [baseUnit, setBaseUnit] = useState("InchesB");
  const [conversionUnit, setConversionUnit] = useState("InchesC");
  const [input, setInput] = useState(1);
  const output = lengthConversion(baseUnit, conversionUnit, input);
  return (
    <Grid>
      <Row>
        <Column sm={1} md={1} lg={1}>
          <RadioButtonGroup
            labelText="Base Unit"
            legendText="Base Unit"
            orientation="vertical"
            defaultSelected={baseUnit}
            onChange={(selected) => setBaseUnit(selected)}
          >
            <RadioButton labelText="Inches" value="InchesB" id="InchesB" />
            <RadioButton labelText="Feet" value="FeetB" id="FeetB" />
            <RadioButton labelText="Yards" value="YardsB" id="YardsB" />
            <RadioButton labelText="Miles" value="MilesB" id="MilesB" />
            <RadioButton
              labelText="Millimeters"
              value="MillimetersB"
              id="MillimetersB"
            />
            <RadioButton
              labelText="Centimeters"
              value="CentimetersB"
              id="CentimetersB"
            />
            <RadioButton labelText="Meters" value="MetersB" id="MetersB" />
            <RadioButton
              labelText="Kilometers"
              value="KilometersB"
              id="KilometersB"
            />
          </RadioButtonGroup>
        </Column>
        <Column sm={0} md={3} lg={5}>
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
        <Column sm={0} md={3} lg={5}>
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
        <Column sm={1} md={1} lg={1}>
          <RadioButtonGroup
            labelText="Conversion Unit"
            legendText="Conversion Unit"
            orientation="vertical"
            defaultSelected={conversionUnit}
            onChange={(selected) => setConversionUnit(selected)}
          >
            <RadioButton labelText="Inches" value="InchesC" id="InchesC" />
            <RadioButton labelText="Feet" value="FeetC" id="FeetC" />
            <RadioButton labelText="Yards" value="YardsC" id="YardsC" />
            <RadioButton labelText="Miles" value="MilesC" id="MilesC" />
            <RadioButton
              labelText="Millimeters"
              value="MillimetersC"
              id="MillimetersC"
            />
            <RadioButton
              labelText="Centimeters"
              value="CentimetersC"
              id="CentimetersC"
            />
            <RadioButton labelText="Meters" value="MetersC" id="MetersC" />
            <RadioButton
              labelText="Kilometers"
              value="KilometersC"
              id="KilometersC"
            />
          </RadioButtonGroup>
        </Column>
      </Row>
    </Grid>
  );
};
export default TimeConverter;
