import React, { useContext, useEffect, useState } from "react";
import { SkillsContext } from "../../hooks/SkillsContext";
import styles from "../../assets/scss/base/skillsSelector.module.scss";
import { Chip, Paper } from "@material-ui/core";
import skillsServices from "../../services/skillsServices";
import clsx from "clsx";
import Pagination from "@material-ui/lab/Pagination";
import CircularProgress from "@material-ui/core/CircularProgress";

interface ChipData {
    key: number;
    label: string;
}
const SkillsSelector = (props:any)=>{
  const [skillsP,setSkillsP] = props.value;
  const [skills,setSkills] = useState<any[]>([]);
  const [pageNumber,setPageNumber] = useState(1);
  const selectedSkills = useContext(SkillsContext);
  const [loader,setLoader] = useState(true);

  const handleDelete = (chipToDelete: ChipData ) => () => {
    selectedSkills[1]((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    setSkillsP((chips) => chips.filter((chip) => chip !== chipToDelete.label));
  };

  useEffect(()=>{
    skillsServices.getSkills()
      .then((res)=>{
        setLoader(false);
        setSkills(res.data);
      })
      .catch((err)=>{
        console.log(err);
      });
  },[]);

  const renderSelectedSkills = ()=>{
    return(
      <Paper component="ul" className={styles.root}>
        {selectedSkills[0].map((data) => {
          return (
            <li key={data.key}>
              <Chip
                style={{ margin: "0.1rem 0.4rem" }}
                label={data.label}
                onDelete={data.label === "React" ? undefined : handleDelete(data)}
              />
            </li>
          );
        })}
      </Paper>
    );
  };

  const renderSkills = ()=>{
    let skillsShownData = skills.slice((pageNumber - 1) * 10,pageNumber * 10);
    let skillsShown:any = [];
    skillsShownData.map((skill)=>{
      let clsName = styles.skills;
      const skillsSelector = ()=>{
        let rawSkill;
        let rawSkillP;
        if(skillsP.length < 8 && !skillsP.includes(skill.skillName)){
          rawSkill = [...selectedSkills[0],{ key: skill.id,label: skill.skillName }];
          rawSkillP = [...skillsP,skill.skillName];
          setSkillsP(rawSkillP);
          selectedSkills[1](rawSkill);
        }
        else if (skillsP.length >= 8){
          return;
        }
      };
      if (skillsP.includes(skill.skillName)){
        clsName = clsx(styles.skills,styles.skillsSelected);
      }
      skillsShown.push(
        <div key={skill.id}
          className={clsName}
          onClick={skillsSelector}>
          <span>
            {skill.skillName}
          </span>
        </div>);
    });
    return skillsShown;
  };

  return(
    loader ? (<div style={{ display: "flex",justifyContent: "center",margin: "10% 0" }}><CircularProgress/></div>)
      : (<div>
        <div>{renderSelectedSkills()}</div>
        <div className={styles.skillContainer}>
          {renderSkills()}
        </div>
        <div style={{ display: "flex",justifyContent: "center",margin: "3% 0" }}>
          <Pagination count={10}
            siblingCount={0}
            variant="outlined" color="primary"
            page={pageNumber}
            onChange={(e,value)=>setPageNumber(value)}
          />
        </div>
      </div>)

  );
};
export default SkillsSelector;
