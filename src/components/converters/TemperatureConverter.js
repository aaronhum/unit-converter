import React, { useState } from "react";
import {
  Grid,
  Row,
  Column,
  NumberInput,
  RadioButton,
  RadioButtonGroup,
} from "carbon-components-react";
import temperatureConversion from "../../utils/temperatureConversion";

const TemperatureConverter = () => {
  const [baseUnit, setBaseUnit] = useState("FB");
  const [conversionUnit, setConversionUnit] = useState("FC");
  const [input, setInput] = useState(1);
  const output = temperatureConversion(baseUnit, conversionUnit, input);

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
            <RadioButton labelText="Fahrenheit" value="FB" id="FB" />
            <RadioButton labelText="Celcius" value="CB" id="CB" />
            <RadioButton labelText="Kelvin" value="KB" id="KB" />
            <RadioButton labelText="Rankine" value="RB" id="RB" />
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
              value={input}
              label="Base Unit Input"
              helperText="Enter your base unit input here"
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
            <RadioButton labelText="Fahrenheit" value="FC" id="FC" />
            <RadioButton labelText="Celcius" value="CC" id="CC" />
            <RadioButton labelText="Kelvin" value="KC" id="KC" />
            <RadioButton labelText="Rankine" value="RC" id="RC" />
          </RadioButtonGroup>
        </Column>
      </Row>
    </Grid>
  );
};
export default TemperatureConverter;
