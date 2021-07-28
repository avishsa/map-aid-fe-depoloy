import React, { useState, useLayoutEffect } from "react";
import "slider-color-picker";
import "./styles.css";

export default function ColorPicker() {
  const ref = React.useRef();
  const [color, setColor] = useState("#ff0000");

  const onColorChange = (event) => {
    setColor(event.target.value);
  };

  useLayoutEffect(() => {
    ref.current.addEventListener("change", onColorChange);
  }, [ref]);

  return (
    <div className="App">
      <slider-color-picker
        ref={ref}
        onChange={onColorChange}
      ></slider-color-picker>
      <div id="preview" style={{ background: color }}></div>
    </div>
  );
}