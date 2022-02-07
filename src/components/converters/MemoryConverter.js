import React, { useState } from "react";
import {
  Grid,
  Row,
  Column,
  NumberInput,
  RadioButton,
  RadioButtonGroup,
} from "carbon-components-react";
import memoryConversion from "../../utils/memoryConversion";
import "./converter.css";

const MemoryConverter = () => {
  const [baseUnit, setBaseUnit] = useState("BitsB");
  const [conversionUnit, setConversionUnit] = useState("BitsC");
  const [input, setInput] = useState(1);
  const output = memoryConversion(baseUnit, conversionUnit, input);
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
            <RadioButton labelText="Bits" value="BitsB" id="BitsB" />
            <RadioButton labelText="Bytes" value="BytesB" id="BytesB" />
            <RadioButton
              labelText="Gibibits"
              value="GibibitsB"
              id="GibibitsB"
            />
            <RadioButton
              labelText="Gibibytes"
              value="GibibytesB"
              id="GibibytesB"
            />
            <RadioButton
              labelText="Gigabits"
              value="GigabitsB"
              id="GigabitsB"
            />
            <RadioButton
              labelText="Gigabytes"
              value="GigabytesB"
              id="GigabytesB"
            />
            <RadioButton
              labelText="Kibibits"
              value="KibibitsB"
              id="KibibitsB"
            />
            <RadioButton
              labelText="Kibibytes"
              value="KibibytesB"
              id="KibibytesB"
            />
            <RadioButton
              labelText="Kilobits"
              value="KilobitsB"
              id="KilobitsB"
            />
            <RadioButton
              labelText="Kilobytes"
              value="KilobytesB"
              id="KilobytesB"
            />
            <RadioButton
              labelText="Mebibits"
              value="MebibitsB"
              id="MebibitsB"
            />
            <RadioButton
              labelText="Mebibytes"
              value="MebibytesB"
              id="MebibytesB"
            />
            <RadioButton
              labelText="Megabits"
              value="MegabitsB"
              id="MegabitsB"
            />
            <RadioButton
              labelText="Megabytes"
              value="MegabytesB"
              id="MegabytesB"
            />
            <RadioButton
              labelText="Pebibits"
              value="PebibitsB"
              id="PebibitsB"
            />
            <RadioButton
              labelText="Pebibytes"
              value="PebibytesB"
              id="PebibytesB"
            />
            <RadioButton
              labelText="Petabytes"
              value="PetabytesB"
              id="PetabytesB"
            />
            <RadioButton
              labelText="Tebibits"
              value="TebibitsB"
              id="TebibitsB"
            />
            <RadioButton
              labelText="Tebibytes"
              value="TebibytesB"
              id="TebibytesB"
            />
            <RadioButton
              labelText="Terabits"
              value="TerabitsB"
              id="TerabitsB"
            />
            <RadioButton
              labelText="Terabytes"
              value="TerabytesB"
              id="TerabytesB"
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
            <RadioButton labelText="Bits" value="BitsC" id="BitsC" />
            <RadioButton labelText="Bytes" value="BytesC" id="BytesC" />
            <RadioButton
              labelText="Gibibits"
              value="GibibitsC"
              id="GibibitsC"
            />
            <RadioButton
              labelText="Gibibytes"
              value="GibibytesC"
              id="GibibytesC"
            />
            <RadioButton
              labelText="Gigabits"
              value="GigabitsC"
              id="GigabitsC"
            />
            <RadioButton
              labelText="Gigabytes"
              value="GigabytesC"
              id="GigabytesC"
            />
            <RadioButton
              labelText="Kibibits"
              value="KibibitsC"
              id="KibibitsC"
            />
            <RadioButton
              labelText="Kibibytes"
              value="KibibytesC"
              id="KibibytesC"
            />
            <RadioButton
              labelText="Kilobits"
              value="KilobitsC"
              id="KilobitsC"
            />
            <RadioButton
              labelText="Kilobytes"
              value="KilobytesC"
              id="KilobytesC"
            />
            <RadioButton
              labelText="Mebibits"
              value="MebibitsC"
              id="MebibitsC"
            />
            <RadioButton
              labelText="Mebibytes"
              value="MebibytesC"
              id="MebibytesC"
            />
            <RadioButton
              labelText="Megabits"
              value="MegabitsC"
              id="MegabitsC"
            />
            <RadioButton
              labelText="Megabytes"
              value="MegabytesC"
              id="MegabytesC"
            />
            <RadioButton
              labelText="Pebibits"
              value="PebibitsC"
              id="PebibitsC"
            />
            <RadioButton
              labelText="Pebibytes"
              value="PebibytesC"
              id="PebibytesC"
            />
            <RadioButton
              labelText="Petabytes"
              value="PetabytesC"
              id="PetabytesC"
            />
            <RadioButton
              labelText="Tebibits"
              value="TebibitsC"
              id="TebibitsC"
            />
            <RadioButton
              labelText="Tebibytes"
              value="TebibytesC"
              id="TebibytesC"
            />
            <RadioButton
              labelText="Terabits"
              value="TerabitsC"
              id="TerabitsC"
            />
            <RadioButton
              labelText="Terabytes"
              value="TerabytesC"
              id="TerabytesC"
            />
          </RadioButtonGroup>
        </Column>
      </Row>
    </Grid>
  );
};
export default MemoryConverter;
