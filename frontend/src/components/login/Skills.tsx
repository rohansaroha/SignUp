import React, { useState } from "react";
import Layout from "../base/Layout";
import styles from "../../assets/scss/base/login.module.scss";
import SkillsSelector from "../base/SkillsSelector";
import skillsServices from "../../services/skillsServices";
import { withRouter } from "react-router";
import { toast } from "react-toastify";

const Skills = (props:any)=>{
  const [skillsP,setSkillsP] = useState<any[]>([]);
  const Continue = ()=>{
    if (skillsP.length < 4){
      toast.info("Select more than 3 skills to continue");
    }
    else{
      skillsServices.addSkills({ "skills": skillsP })
        .then(()=>{
          props.history.push("/home");
        })
        .catch((err)=>{
          toast.error(err.response.data.message);
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
