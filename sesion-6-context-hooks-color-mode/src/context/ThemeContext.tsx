import { useState, useLayoutEffect, createContext } from "react";

const ThemeContext = createContext({
  dark: false,
  toggle: () => {},
});

export default ThemeContext;

export function ThemeProvider(props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  const [dark, setDark] = useState(false);

  useLayoutEffect(() => {
    const lastTheme = window.localStorage.getItem("darkTheme");
    if (lastTheme === "true") {
      setDark(true);
      applyTheme(darkTheme);
    } else {
      setDark(false);
      applyTheme(lightTheme);
    }
  }, [dark]);

  const applyTheme = (theme: any[]) => {
    const root = document.getElementsByTagName("html")[0];
    root.style.cssText = theme.join(";");
  };

  const toggle = () => {
    const body = document.getElementsByTagName("body")[0];
    body.style.cssText = "transition: background .5s ease";

    setDark(!dark);
    let stringDark = !dark ? "true" : "false";
    window.localStorage.setItem("darkTheme", stringDark);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggle,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

// styles
const lightTheme = [
  "--text: #2cb67d",
  "--inactive: rgba(0,0,0,.3)",
  "--background: #fff",
];

const darkTheme = [
  "--text: #7f5af0",
  "--inactive: rgba(255,255,255,.3)",
  "--background: #16161a",
];
