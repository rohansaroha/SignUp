import React, { useContext, useState } from "react";
import Layout from "../base/Layout";
import styles from "../../assets/scss/base/login.module.scss";
import { IUser } from "../../constants/interfaces/loginInterface";
import { StepContext } from "../../hooks/StepContext";
import { FormControl,  Input, InputLabel } from "@material-ui/core";

const UserDetails = ()=>{
  const [values, setValues] = useState<IUser>({
    firstName: "",
    lastName: ""
  });

  const step = useContext(StepContext);
  const signUpHandler = ()=>{
    console.log(step);
    step[1](3);
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
          <div onClick={signUpHandler}  className={styles.button}>
            <span>Continue</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDetails;
