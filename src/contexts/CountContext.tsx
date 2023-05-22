import { createContext } from "react";
import { useState } from "react";

type CountContextProviderProps = {
  children: React.ReactNode;
};

type CountContextType = {
  count: number;
  changeCount: () => void;
};

const CountContext = createContext<CountContextType>({
  count: 0,
  changeCount: () => {
    return;
  },
});

export default CountContext;

export const CountContextProvider = ({
  children,
}: CountContextProviderProps) => {
  const [count, setCount] = useState(0);
  const changeCount = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <CountContext.Provider value={{ count, changeCount }}>
      {children}
    </CountContext.Provider>
  );
};
