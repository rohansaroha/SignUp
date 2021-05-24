import React, { useContext,useState } from "react";
import styles from "../../assets/scss/base/login.module.scss";
import "../../assets/scss/base/signUp.scss";
import { StepContext } from "../../hooks/StepContext";
import LoginForm from "../base/LoginForm";
import { ILogin } from "../../constants/interfaces/loginInterface";
import AuthServices from "../../services/authServices";
import { toast } from "react-toastify";
import StorageService from "../../services/storageService";
import { withRouter } from "react-router";

const SignIn = (props:any)=>{
  const [values, setValues] = useState<ILogin>({
    username: "",
    password: "",
    showPassword: false,
  });

  const step = useContext(StepContext);
  const signInHandler = ()=>{
    AuthServices.SignIn(values)
      .then((res)=>{
        StorageService.setKey("token",res.data.accessToken);
        toast.success("SignIn Successful");
        if(!res.data.user.firstName && !res.data.user.firstName ){
          step[1](2);
        }
        else if (!res.data.user.skills){
          step[1](3);
        }
        else{
          props.history.push({
            pathname: "/home",
            state: res.data.user
          });
        }
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

export default withRouter(SignIn);
