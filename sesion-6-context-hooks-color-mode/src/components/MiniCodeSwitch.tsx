import { useContext } from "react";

import ThemeContext from "../context/ThemeContext";

export default function MiniCodeSwitch() {
  const { dark, toggle } = useContext(ThemeContext);

  return (
    <button
      className={`color-button ${!dark ? "color-button--active" : ""}`}
      onClick={() => toggle()}
    >
      <i className={`icon ${!dark ? "active" : ""}`}>☀️</i>
      <i className={`icon ${dark ? "active" : ""}`}>🌥️</i>
    </button>
  );
}
