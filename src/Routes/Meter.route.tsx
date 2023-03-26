import React, { useState } from "react"
import Slider from "react-input-slider";
import { ReactMeter } from "react-meter";
import "../Styles/Home.css"

export const Meter: React.FC = () => {
    const [value, setValue] = useState(90);
    const [sections, setSections] = useState(1);
    const [colorStart, setColorStart] = useState(120);
    const [colorShift, setColorShift] = useState(60);
    const [numColors, setNumColors] = useState(3);
    const [saturation, setSaturation] = useState(75);
    const [luminosity, setLuminosity] = useState(50);
    return(
        <div className="body-container">
           Try react-meter now!
        
        <ReactMeter className="working" value={Number(value)/100} sections={sections} colorStart={colorStart} colorShift={colorShift} numColors={numColors} saturation={saturation} luminosity={luminosity} />
       
        <div className="slider-container">
            <div className="label"><label>Percent: {value}</label>
                <Slider axis="x" xmin={0} x={value} onChange={(e) => {setValue(e.x); console.log(`changing Value to ${e.x}`)}}/>
            </div>
            <div style={{"width": "50px"}}/> 
            <div className="label"><label>Sections: {sections}</label>
                <Slider axis="x" xmin={1} xmax={6} xstep={1} x={sections} onChange={(e) => {setSections(e.x); console.log(`changing BPs to ${e.x}`)}}/>
            </div>
            <div style={{"width": "50px"}}/> 
            <div className="label"><label>Max Number of Colors: {numColors}</label>
                <Slider axis="x" xmin={1} xmax={6} xstep={1} x={numColors} onChange={(e) => {setNumColors(e.x); console.log(`changing Max Colors to ${e.x}`)}}/>
            </div>
            <div style={{"width": "50px"}}/> 
            <div className="label"><label>Color Start: {colorStart}</label>
                <Slider axis="x" xmin={0} xmax={360} xstep={10} x={colorStart} onChange={(e) => {setColorStart(e.x); console.log(`changing Color Start to ${e.x}`)}}/>
            </div>
            <div style={{"width": "50px"}}/> 
            <div className="label"><label>Color Shift: {colorShift}</label>
                <Slider axis="x" xmin={0} xmax={350} xstep={10} x={colorShift} onChange={(e) => {setColorShift(e.x); console.log(`changing Color Shift to ${e.x}`)}}/>
            </div>
            <div style={{"width": "50px"}}/> 
            <div className="label"><label>Luminosity: {luminosity}</label>
                <Slider axis="x" xmin={0} xmax={100} xstep={5} x={luminosity} onChange={(e) => {setLuminosity(e.x); console.log(`changing Luminosity to ${e.x}`)}}/>
            </div>
            <div style={{"width": "50px"}}/> 
            <div className="label"><label>Saturation: {saturation}</label>
                <Slider axis="x" xmin={0} xmax={100} xstep={10} x={saturation} onChange={(e) => {setSaturation(e.x); console.log(`changing Saturation to ${e.x}`)}}/>
            </div>
        </div>
           
        </div>
    );
};