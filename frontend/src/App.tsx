import React from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Account from "./pages/Account";
import "react-toastify/dist/ReactToastify.css";
import theme from "./theme";
import { StepProvider } from "./hooks/StepContext";
import Login from "./pages/Login";
import { SkillProvider } from "./hooks/SkillsContext";
import { ToastContainer } from "react-toastify";

const App = ()=> {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <SkillProvider>
          <StepProvider>
            <ToastContainer/>
            <div className="App">
              <Switch>
                <Route path='/home' exact={true} component={Account}/>
                <Route path='/' exact={true} component={Login}/>
              </Switch>
            </div>
          </StepProvider>
        </SkillProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
