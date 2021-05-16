import React, { useContext, useEffect, useState } from "react";
import "../assets/scss/account.scss";
import { toast } from "react-toastify";
import AuthServices from "../services/authServices";
import { SkillsContext } from "../hooks/SkillsContext";
import { NavLink } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

const Account = () => {
  const selectedSkills = useContext(SkillsContext);
  const [loader,setLoader] = useState(true);
  const [userData, setUserData] = useState<any>({
    firstName: null,
    lastName: null,
    email: null,
    picture: null,
    skills: []
  });

  useEffect(()=>{
    AuthServices.getUser({ "skills": selectedSkills[0] })
      .then((res)=>{
        setLoader(false);
        setUserData({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          email: res.data.username,
          skills: res.data.skills
        });
      })
      .catch((err)=>{
        toast.error(err.response.data.message);
      });
  },[selectedSkills]);

  const renderSkills = ()=>{
    let skills:any[] = [];
    userData.skills.map((skill,index)=>{
      skills.push(<div key={index} className='settings-card'><span>{skill}</span></div>);
    });
    return skills;
  };
  return (
    loader ? (<div style={{ display: "flex",justifyContent: "center",margin: "10% 0" }}><CircularProgress/></div>)
      : (<div style={{ backgroundColor: "#e8e8e8",padding: "1rem" }}>
        <div className='account-main-container'>
          <div className='settings-main-container'>
            <div className='settings-info-container'>
              <div className='settings-info-header'>
                <span>PERSONAL INFO</span>
              </div>
              <div className='settings-info-profile-container'>
                <div className='settings-info-profile-header'><span>Profile Picture</span></div>
                <div className='settings-info-profile-img'><img src={ "https://react.semantic-ui.com/images/avatar/large/matthew.png"} alt=''/></div>
              </div>
              <div className='settings-info-name-container'>
                <div className='settings-info-name-header'><span>First Name</span></div>
                <div className='settings-info-name'><span>{userData.firstName}</span></div>
              </div>
              <div className='settings-info-name-container'>
                <div className='settings-info-name-header'><span>Last Name</span></div>
                <div className='settings-info-name'><span>{userData.lastName}</span></div>
              </div>
              <div className='settings-info-email-container'>
                <div className='settings-info-email-header'><span>Email</span></div>
                <div className='settings-info-email'><span>{userData.email}</span></div>
              </div>
              <div className='settings-info-password-container'>
                <div className='settings-info-password-header'><span>Password</span></div>
                <div className='settings-info-password'><span>**********</span></div>
              </div>
              <div className='settings-info-password-container'>
                <div className='settings-skill-header'><span>Skills</span></div>
                <div className='settings-card-container'>{renderSkills()}</div>
              </div>
            </div>
            <NavLink to='/' className='settings-button'>
              <span>Logout</span>
            </NavLink>
          </div>
        </div>
      </div>)
  );
};

export default Account;