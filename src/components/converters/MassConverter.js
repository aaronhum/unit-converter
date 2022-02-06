import React, { useState } from "react";
import {
  Grid,
  Row,
  Column,
  NumberInput,
  RadioButton,
  RadioButtonGroup,
} from "carbon-components-react";
import massConversion from "../../utils/massConversion";
import "./converter.css";

const MassConverter = () => {
  const [baseUnit, setBaseUnit] = useState("PoundsB");
  const [conversionUnit, setConversionUnit] = useState("PoundsC");
  const [input, setInput] = useState(1);
  const output = massConversion(baseUnit, conversionUnit, input);
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
            <RadioButton labelText="Pounds" value="PoundsB" id="PoundsB" />
            <RadioButton labelText="Grains" value="GrainsB" id="GrainsB" />
            <RadioButton labelText="Drams" value="DramsB" id="DramsB" />
            <RadioButton labelText="Ounces" value="mOuncesB" id="mOuncesB" />
            <RadioButton labelText="Tons" value="TonsB" id="TonsB" />
            <RadioButton labelText="Grams" value="GramsB" id="GramsB" />
            <RadioButton
              labelText="Kilograms"
              value="KilogramsB"
              id="KilogramsB"
            />
            <RadioButton
              labelText="Metric Tons"
              value="MetricTonsB"
              id="MetricTonsB"
            />
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
            <RadioButton labelText="Pounds" value="PoundsC" id="PoundsC" />
            <RadioButton labelText="Grains" value="GrainsC" id="GrainsC" />
            <RadioButton labelText="Drams" value="DramsC" id="DramsC" />
            <RadioButton labelText="Ounces" value="mOuncesC" id="mOuncesC" />
            <RadioButton labelText="Tons" value="TonsC" id="TonsC" />
            <RadioButton labelText="Grams" value="GramsC" id="GramsC" />
            <RadioButton
              labelText="Kilograms"
              value="KilogramsC"
              id="KilogramsC"
            />
            <RadioButton
              labelText="Metric Tons"
              value="MetricTonsC"
              id="MetricTonsC"
            />
          </RadioButtonGroup>
        </Column>
      </Row>
    </Grid>
  );
};
export default MassConverter;
