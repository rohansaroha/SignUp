import React, { createContext, useState } from "react";

export const StepContext = createContext({
  step: 0
});

export const StepProvider = ({ children }:{children:React.ReactNode})=>{
  const providerValue = useProviderQty();
  return <StepContext.Provider value={providerValue}>{children}</StepContext.Provider>;
};

const useProviderQty = ():any=>{
  const [step,setStep] = useState<number>(3);
  return [step,setStep];
};
