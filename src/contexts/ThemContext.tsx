import { createContext } from "react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";

type ThemContextType = {
  lightMode: boolean;
  SwitchMode: () => void;
};

type ThemContextProviderProps = {
  children: React.ReactNode;
};

const ThemContext = createContext<ThemContextType>({
  lightMode: true,
  SwitchMode: () => {},
});

export default ThemContext;

export const ThemContextProvider = ({ children }: ThemContextProviderProps) => {
  const [lightMode, setLightMode] = useState(true);
  const SwitchMode = () => {
    console.log(lightMode);
    setLightMode((prevState) => !prevState);
  };

  const darkTheme = {
    colors: {
      background: "#141D2F",
      themeBtn: "#fff",
      card: "#1E2A47",
      textNorm: "#fff",
      textBolded: "#FFF",
    },
  };
  const lightTheme = {
    colors: {
      background: "#F6F8FF",
      themeBtn: "#4B6A9B",
      card: "#FEFEFE",
      textNorm: "#697C9A",
      textBolded: "#2B3442",
    },
  };

  return (
    <ThemContext.Provider value={{ lightMode, SwitchMode }}>
      <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemContext.Provider>
  );
};
