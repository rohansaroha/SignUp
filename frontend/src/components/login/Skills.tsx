import React, { useState } from "react";
import Layout from "../base/Layout";
import styles from "../../assets/scss/base/login.module.scss";
import SkillsSelector from "../base/SkillsSelector";
import skillsServices from "../../services/skillsServices";
import { withRouter } from "react-router";

const Skills = (props:any)=>{
  const [skillsP,setSkillsP] = useState<any[]>([]);
  const Continue = ()=>{
    console.log(skillsP);
    props.history.push("/home");
    if (skillsP.length < 4){
      console.log("select more");
    }
    else{
      skillsServices.addSkills(skillsP)
        .then((res)=>{
          console.log(res.data);
        })
        .catch((err)=>{
          console.log(err);
        });
    }
  };
  return(
    <Layout>
      <div className={styles.main}>
        <div className={styles.contentContainer}>
          <div className={styles.header}>
            <span>Select your Skills</span>
          </div>
          <div className={styles.pHeader}>
            <span>You have to choose between 3-8</span>
          </div>
          <SkillsSelector value={[skillsP,setSkillsP]}/>
          <div className={styles.button} onClick={Continue}>
            <span>Continue</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default withRouter(Skills);
