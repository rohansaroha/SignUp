import React, { createContext, useState } from "react";

export const SkillsContext = createContext({
  skills: []
});

export const SkillProvider = ({ children }:{children:React.ReactNode})=>{
  const providerValue = useProviderQty();
  return <SkillsContext.Provider value={providerValue}>{children}</SkillsContext.Provider>;
};

const useProviderQty = ():any=>{
  const [skills,setSkills] = useState<any>([]);
  return [skills,setSkills];
};
