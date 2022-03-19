import React from "react";
import Switch from "react-switch";
import "./switcher.css";
import { MdLightMode, MdNightlight } from "react-icons/md";
import COLORS from "../../../colors";

function Switcher({ enabled, setEnabled }) {
  const handleChange = () => {
    setEnabled((prevState) => {
      return { dark: !prevState.dark };
    });
  };

  return (
    <div className="switcher">
      <Switch
        onColor={COLORS.bright_color}
        onChange={handleChange}
        checked={enabled.dark}
        checkedIcon={
          <MdNightlight
            size={21}
            style={{ color: "white", marginTop: "3px" }}
          />
        }
        uncheckedIcon={
          <MdLightMode size={21} style={{ color: "white", marginTop: "3px" }} />
        }
      />
    </div>
  );
}

export default Switcher;
