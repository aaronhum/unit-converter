import React, { useState } from "react";
import {
  Grid,
  Row,
  Column,
  NumberInput,
  RadioButton,
  RadioButtonGroup,
} from "carbon-components-react";
import areaConversion from "../../utils/areaConversion";

const AreaConverter = () => {
  const [baseUnit, setBaseUnit] = useState("AcresB");
  const [conversionUnit, setConversionUnit] = useState("AcresC");
  const [input, setInput] = useState(1);
  const output = areaConversion(baseUnit, conversionUnit, input);
  console.log(output);
  return (
    <Grid>
      <Row>
        <Column sm={1} md={1} lg={2}>
          <RadioButtonGroup
            labelText="Base Unit"
            legendText="Base Unit"
            orientation="vertical"
            defaultSelected={baseUnit}
            onChange={(selected) => setBaseUnit(selected)}
          >
            <RadioButton labelText="Acres" value="AcresB" id="AcresB" />
            <RadioButton labelText="Ares" value="AresB" id="AresB" />
            <RadioButton labelText="Barns" value="BarnsB" id="BarnsB" />
            <RadioButton
              labelText="Hectares"
              value="HectaresB"
              id="HectaresB"
            />
            <RadioButton labelText="Roods" value="RoodsB" id="RoodsB" />
            <RadioButton
              labelText="Sq. Inches"
              value="sqInchesB"
              id="sqInchesB"
            />
            <RadioButton labelText="Sq. Feet" value="sqFeetB" id="sqFeetB" />
            <RadioButton labelText="Sq. Yards" value="sqYardsB" id="sqYardsB" />
            <RadioButton labelText="Sq. Miles" value="sqMilesB" id="sqMilesB" />
            <RadioButton
              labelText="Sq. Millimeters"
              value="sqMillimetersB"
              id="sqMillimetersB"
            />
            <RadioButton
              labelText="Sq. Centimeters"
              value="sqCentimetersB"
              id="sqCentimetersB"
            />
            <RadioButton
              labelText="Sq. Meters"
              value="sqMetersB"
              id="sqMetersB"
            />
          </RadioButtonGroup>
        </Column>
        <Column sm={0} md={3} lg={4}>
          <NumberInput
            id="baseUnitInput1"
            value={input}
            label="Base Unit Input"
            helperText="Enter your base unit input here"
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
        <Column sm={1} md={1} lg={2}>
          <RadioButtonGroup
            labelText="Conversion Unit"
            legendText="Conversion Unit"
            orientation="vertical"
            defaultSelected={conversionUnit}
            onChange={(selected) => setConversionUnit(selected)}
          >
            <RadioButton labelText="Acres" value="AcresC" id="AcresC" />
            <RadioButton labelText="Ares" value="AresC" id="Aresc" />
            <RadioButton labelText="Barns" value="BarnsC" id="BarnsC" />
            <RadioButton
              labelText="Hectares"
              value="HectaresC"
              id="HectaresC"
            />
            <RadioButton labelText="Roods" value="Roodsc" id="RoodsC" />
            <RadioButton
              labelText="Sq. Inches"
              value="sqInchesC"
              id="sqInchesC"
            />
            <RadioButton labelText="Sq. Feet" value="sqFeetC" id="sqFeetC" />
            <RadioButton labelText="Sq. Yards" value="sqYardsC" id="sqYardsC" />
            <RadioButton labelText="Sq. Miles" value="sqMilesC" id="sqMilesC" />
            <RadioButton
              labelText="Sq. Millimeters"
              value="sqMillimetersC"
              id="sqMillimetersC"
            />
            <RadioButton
              labelText="Sq. Centimeters"
              value="sqCentimetersC"
              id="sqCentimetersC"
            />
            <RadioButton
              labelText="Sq. Meters"
              value="sqMetersC"
              id="sqMetersC"
            />
          </RadioButtonGroup>
        </Column>
      </Row>
    </Grid>
  );
};
export default AreaConverter;
