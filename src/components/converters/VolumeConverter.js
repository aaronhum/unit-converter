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
import "./converter.css";

const VolumeConverter = () => {
  const [baseUnit, setBaseUnit] = useState("InchesB");
  const [conversionUnit, setConversionUnit] = useState("InchesC");
  const [input, setInput] = useState(1);
  const output = lengthConversion(baseUnit, conversionUnit, input);
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
            <RadioButton labelText="Tea Spoon(US)" value="tspB" id="tspB" />
            <RadioButton labelText="Table Spoon(US)" value="tbsB" id="tbsB" />
            <RadioButton labelText="Fl Ounce(US)" value="OunceB" id="OunceB" />
            <RadioButton labelText="Cup(US)" value="CupB" id="CupB" />
            <RadioButton labelText="Pint(US)" value="PintB" id="PintB" />
            <RadioButton labelText="Quart(US)" value="QuartB" id="QuartB" />
            <RadioButton labelText="Gallon(US)" value="GallonB" id="GallonB" />
            <RadioButton labelText="Tea Spoon(Imp)" value="itspB" id="itspB" />
            <RadioButton
              labelText="Table Spoon(Imp)"
              value="itbsB"
              id="itbsB"
            />
            <RadioButton
              labelText="Fl Ounce(Imp)"
              value="iOunceB"
              id="iOunceB"
            />
            <RadioButton labelText="Cup(Imp)" value="iCupB" id="iCupB" />
            <RadioButton labelText="Pint(Imp)" value="iPintB" id="iPintB" />
            <RadioButton labelText="Quart(Imp)" value="iQuartB" id="iQuartB" />
            <RadioButton
              labelText="Gallon(Imp)"
              value="iGallonB"
              id="iGallonB"
            />
            <RadioButton
              labelText="Cu. Inches"
              value="cuInchesB"
              id="cuInchesB"
            />
            <RadioButton labelText="Liters" value="LitersB" id="LitersB" />
            <RadioButton
              labelText="Milliliters"
              value="MilliliersB"
              id="MilliliersB"
            />
            <RadioButton labelText="Cu. Feet" value="cuFeetB" id="cuFeetB" />
            <RadioButton labelText="Cu. Yards" value="cuYardsB" id="cuYardsB" />
            <RadioButton labelText="Cu. Miles" value="cuMilesB" id="cuMilesB" />
            <RadioButton
              labelText="Cu. Millimeters"
              value="cuMillimetersB"
              id="cuMillimetersB"
            />
            <RadioButton
              labelText="Cu. Centimeters"
              value="cuCentimetersB"
              id="cuCentimetersB"
            />
            <RadioButton
              labelText="Cu. Meters"
              value="cuMetersB"
              id="cuMetersB"
            />
            <RadioButton
              labelText="Cu. Kilometers"
              value="cuKilometersB"
              id="cuKilometersB"
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
export default VolumeConverter;
