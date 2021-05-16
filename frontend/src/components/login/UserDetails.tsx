import React, { useContext, useState } from "react";
import Layout from "../base/Layout";
import styles from "../../assets/scss/base/login.module.scss";
import { IUser } from "../../constants/interfaces/loginInterface";
import { StepContext } from "../../hooks/StepContext";
import { FormControl,  Input, InputLabel } from "@material-ui/core";
import AuthServices from "../../services/authServices";
import { toast } from "react-toastify";
import { withRouter } from "react-router";

const UserDetails = ()=>{
  const [values, setValues] = useState<IUser>({
    firstName: "",
    lastName: ""
  });

  const step = useContext(StepContext);
  const continueHandler = ()=>{
    console.log(values);
    AuthServices.UserProfile(values)
      .then(()=>{
        step[1](3);
      })
      .catch((err)=>{
        console.log(err.response);
        if(err.response.data.message){
          toast.error(err.response.data.message);
        }
      });
  };
  const handleChange = (prop: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return(
    <Layout>
      <div className={styles.main}>
        <div className={styles.contentContainer}>
          <div className={styles.header}>
            <span>Welcome to BHyve</span>
          </div>
          <div className={styles.pHeader}>
            <span>Enter your Details</span>
          </div>
          <div>
            <div className={styles.loginForm}>
              <FormControl className={styles.textField}>
                <InputLabel htmlFor="standard-adornment-password">First Name</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={"email"}
                  value={values.firstName}
                  onChange={handleChange("firstName")}
                />
              </FormControl>
              <FormControl className={styles.textField}>
                <InputLabel htmlFor="standard-adornment-password">Last Name</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={"text"}
                  value={values.lastName}
                  onChange={handleChange("lastName")}
                />
              </FormControl>
            </div>
          </div>
          <div onClick={continueHandler}  className={styles.button}>
            <span>Continue</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(UserDetails);
