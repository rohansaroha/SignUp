import React, { useContext } from "react";
import SignIn from "../components/login/SignIn";
import { StepContext } from "../hooks/StepContext";
import SignUp from "../components/login/SignUp";
import UserDetails from "../components/login/UserDetails";
import Skills from "../components/login/Skills";

const Login = ()=>{
  const step = useContext(StepContext);
  switch (step[0]){
  case 0 : return (<SignIn/>);
  case 1 : return (<SignUp/>);
  case 2 : return (<UserDetails/>);
  case 3 : return (<Skills/>);
  }
};

export default Login;
