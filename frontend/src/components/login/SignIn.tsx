import React, { useContext,useState } from "react";
import styles from "../../assets/scss/base/login.module.scss";
import "../../assets/scss/base/signUp.scss";
import { StepContext } from "../../hooks/StepContext";
import LoginForm from "../base/LoginForm";
import { ILogin } from "../../constants/interfaces/loginInterface";
import AuthServices from "../../services/authServices";

const SignIn = ()=>{
  const [values, setValues] = useState<ILogin>({
    username: "",
    password: "",
    showPassword: false,
  });

  const step = useContext(StepContext);
  const signInHandler = ()=>{
    AuthServices.SignIn(values);
    console.log(values);
    step[1](2);
  };
  return(
    <div className={styles.main}>
      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <span>Welcome to BHyve</span>
        </div>
        <div className={styles.pHeader}>
          <span>SignIn to Continue</span>
        </div>
        <div>
          <LoginForm values={[values,setValues]}/>
        </div>
        <div className={styles.button} onClick={signInHandler}>
          <span>Sign In</span>
        </div>
        <div className={styles.sHeader}>
          <span>Not SignUp yet ?</span>
        </div>
        <div onClick={()=>step[1](1)}  className={styles.button}>
          <span>Sign Up</span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
