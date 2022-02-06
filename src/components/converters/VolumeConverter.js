import React, { useState } from "react";
import {
  Grid,
  Row,
  Column,
  NumberInput,
  RadioButton,
  RadioButtonGroup,
} from "carbon-components-react";
import volumeConversion from "../../utils/volumeConversion";
import "./converter.css";

const VolumeConverter = () => {
  const [baseUnit, setBaseUnit] = useState("tspB");
  const [conversionUnit, setConversionUnit] = useState("tspC");
  const [input, setInput] = useState(1);
  const output = volumeConversion(baseUnit, conversionUnit, input);
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
            <RadioButton
              labelText="Cup(US Customary)"
              value="CupcB"
              id="CupcB"
            />
            <RadioButton labelText="Cup(US Legal)" value="CuplB" id="CuplB" />
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
            <RadioButton labelText="Liters" value="LitersB" id="LitersB" />
            <RadioButton
              labelText="Milliliters"
              value="MilliliersB"
              id="MilliliersB"
            />
            <RadioButton
              labelText="Cu. Inches"
              value="cuInchesB"
              id="cuInchesB"
            />
            <RadioButton labelText="Cu. Feet" value="cuFeetB" id="cuFeetB" />
            <RadioButton labelText="Cu. Yards" value="cuYardsB" id="cuYardsB" />
            <RadioButton
              labelText="Cu. Centimeters"
              value="cuCentimetersB"
              id="cuCentimetersB"
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
            <RadioButton labelText="Tea Spoon(US)" value="tspC" id="tspC" />
            <RadioButton labelText="Table Spoon(US)" value="tbsC" id="tbsC" />
            <RadioButton labelText="Fl Ounce(US)" value="OunceC" id="OunceC" />
            <RadioButton
              labelText="Cup(US Customary)"
              value="CupcC"
              id="CupcC"
            />
            <RadioButton labelText="Cup(US Legal)" value="CuplC" id="CuplC" />
            <RadioButton labelText="Pint(US)" value="PintC" id="PintC" />
            <RadioButton labelText="Quart(US)" value="QuartC" id="QuartC" />
            <RadioButton labelText="Gallon(US)" value="GallonC" id="GallonC" />
            <RadioButton labelText="Tea Spoon(Imp)" value="itspC" id="itspC" />
            <RadioButton
              labelText="Table Spoon(Imp)"
              value="itbsC"
              id="itbsC"
            />
            <RadioButton
              labelText="Fl Ounce(Imp)"
              value="iOunceC"
              id="iOunceC"
            />
            <RadioButton labelText="Cup(Imp)" value="iCupC" id="iCupC" />
            <RadioButton labelText="Pint(Imp)" value="iPintC" id="iPintC" />
            <RadioButton labelText="Quart(Imp)" value="iQuartC" id="iQuartC" />
            <RadioButton
              labelText="Gallon(Imp)"
              value="iGallonC"
              id="iGallonC"
            />
            <RadioButton labelText="Liters" value="LitersC" id="LitersC" />
            <RadioButton
              labelText="Milliliters"
              value="MilliliersC"
              id="MilliliersC"
            />
            <RadioButton
              labelText="Cu. Inches"
              value="cuInchesC"
              id="cuInchesC"
            />
            <RadioButton labelText="Cu. Feet" value="cuFeetC" id="cuFeetC" />
            <RadioButton labelText="Cu. Yards" value="cuYardsC" id="cuYardsC" />
            <RadioButton
              labelText="Cu. Centimeters"
              value="cuCentimetersC"
              id="cuCentimetersC"
            />
          </RadioButtonGroup>
        </Column>
      </Row>
    </Grid>
  );
};
export default VolumeConverter;
