import { createContext } from "react";
import { useState } from "react";

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
    setLightMode((prevState) => !prevState);
  };

  return (
    <ThemContext.Provider value={{ lightMode, SwitchMode }}>
      {children}
    </ThemContext.Provider>
  );
};
