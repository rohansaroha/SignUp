import React from "react";
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from "@material-ui/core";
import styles from "../../assets/scss/base/login.module.scss";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const LoginForm = (props:any)=>{
  const [values,setValues] = props.values;
  const handleChange = (prop: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return(
    <div className={styles.loginForm} >
      <FormControl className={styles.textField}>
        <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
        <Input
          id="standard-adornment-password"
          type={"email"}
          value={values.username}
          onChange={handleChange("username")}
        />
      </FormControl>
      <FormControl className={styles.textField}>
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
};

export default LoginForm;
