import { createContext, useContext, useState, type ReactNode } from "react";

export type LoaderContextProps = {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
};

type LoaderProviderProps = {
  children: ReactNode;
};

const LoaderContext = createContext<LoaderContextProps | undefined>(undefined);

export const LoaderProvider = ({ children }: LoaderProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return (
    <>
      <LoaderContext.Provider value={{ isLoading, startLoading, stopLoading }}>
        {children}
      </LoaderContext.Provider>
    </>
  );
};

export const UseLoader = () => {
  const context = useContext(LoaderContext);
  if (!context)
    throw new Error("useLoader must be used within a LoaderContext!");

  return context;
};
