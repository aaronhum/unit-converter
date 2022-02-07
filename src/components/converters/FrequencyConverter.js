import React, { useState } from "react";
import {
  Grid,
  Row,
  Column,
  NumberInput,
  RadioButton,
  RadioButtonGroup,
} from "carbon-components-react";
import frequencyConversion from "../../utils/frequencyConversion";
import "./converter.css";

const FrequencyConverter = () => {
  const [baseUnit, setBaseUnit] = useState("ExahertzB");
  const [conversionUnit, setConversionUnit] = useState("ExahertzC");
  const [input, setInput] = useState(1);
  const output = frequencyConversion(baseUnit, conversionUnit, input);
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
              labelText="Exahertz"
              value="ExahertzB"
              id="ExahertzB"
            />
            <RadioButton
              labelText="Gigahertz"
              value="GigahertzB"
              id="GigahertzB"
            />
            <RadioButton labelText="Hertz" value="HertzB" id="HertzB" />
            <RadioButton
              labelText="Kilohertz"
              value="KilohertzB"
              id="KilohertzB"
            />
            <RadioButton
              labelText="Megahertz"
              value="MegahertzB"
              id="MegahertzB"
            />
            <RadioButton
              labelText="Microhertz"
              value="MicrohertzB"
              id="MicrohertzB"
            />
            <RadioButton
              labelText="Millihertz"
              value="MillihertzB"
              id="MillihertzB"
            />
            <RadioButton
              labelText="Petahertz"
              value="PetahertzB"
              id="PetahertzB"
            />
            <RadioButton
              labelText="Terahertz"
              value="TerahertzB"
              id="TerahertzB"
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
            <RadioButton
              labelText="Exahertz"
              value="ExahertzC"
              id="ExahertzC"
            />
            <RadioButton
              labelText="Gigahertz"
              value="GigahertzC"
              id="GigahertzC"
            />
            <RadioButton labelText="Hertz" value="HertzC" id="HertzC" />
            <RadioButton
              labelText="Kilohertz"
              value="KilohertzC"
              id="KilohertzC"
            />
            <RadioButton
              labelText="Megahertz"
              value="MegahertzC"
              id="MegahertzC"
            />
            <RadioButton
              labelText="Microhertz"
              value="MicrohertzC"
              id="MicrohertzC"
            />
            <RadioButton
              labelText="Millihertz"
              value="MillihertzC"
              id="MillihertzC"
            />
            <RadioButton
              labelText="Petahertz"
              value="PetahertzC"
              id="PetahertzC"
            />
            <RadioButton
              labelText="Terahertz"
              value="TerahertzC"
              id="TerahertzC"
            />
          </RadioButtonGroup>
        </Column>
      </Row>
    </Grid>
  );
};
export default FrequencyConverter;
