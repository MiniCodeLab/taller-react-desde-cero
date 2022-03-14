import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function MiniCodeCard(props: {
  title?: string;
  description?: string;
}) {
  const { dark } = useContext(ThemeContext);

  return (
    <div>
      <h1>{props.title || "Hello MiniCoders!"}</h1>
      <h2>{props.description || "MiniCode Default Value."}</h2>
      <h2>{!dark ? "Light theme" : "Dark Theme"}</h2>
    </div>
  );
}
