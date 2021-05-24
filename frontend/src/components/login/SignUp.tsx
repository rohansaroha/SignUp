import React, { useContext, useState } from "react";
import Layout from "../base/Layout";
import styles from "../../assets/scss/base/login.module.scss";
import LoginForm from "../base/LoginForm";
import { ILogin } from "../../constants/interfaces/loginInterface";
import { StepContext } from "../../hooks/StepContext";
import AuthServices from "../../services/authServices";
import { toast } from "react-toastify";

const SignUp = ()=>{
  const [values, setValues] = useState<ILogin>({
    username: "",
    password: "",
    showPassword: false,
  });

  const step = useContext(StepContext);
  const signUpHandler = ()=>{
    AuthServices.SignUp(values)
      .then(()=>{
        toast.success("SignUp Successful");
        step[1](0);
      })
      .catch((err)=>{
        if(Array.isArray(err.response.data.message)){
          toast.error(err.response.data.message[0]);
        }
        else{
          toast.error(err.response.data.message);
        }
      });
  };
  return(
    <Layout>
      <div className={styles.main}>
        <div className={styles.contentContainer}>
          <div className={styles.header}>
            <span>Welcome to BHyve</span>
          </div>
          <div className={styles.pHeader}>
            <span>SignUp to Continue</span>
          </div>
          <div>
            <LoginForm values={[values,setValues]}/>
          </div>
          <div onClick={signUpHandler}  className={styles.button}>
            <span>Sign Up</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
