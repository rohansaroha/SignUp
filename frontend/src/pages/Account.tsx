import React, { useEffect, useState } from "react";
import "../assets/scss/account.scss";
import skillsServices from "../services/skillsServices";

const Account = () => {
  const [userData, setUserData] = useState<any>({
    name: null,
    email: null,
    picture: null,
    skills: ["node.js","javascript","typescript","html","css","bootstrap","adobe premium","asdasfafiueubacab"]
  });

  useEffect(()=>{
    skillsServices.getSkills()
      .then((res)=>{
        console.log(res.data);
      })
      .catch((err)=>{
        console.log(err);
      });
  },[]);

  const renderSkills = ()=>{
    console.log(userData.skills);
    let skills:any[] = [];
    userData.skills.map((skill)=>{
      skills.push(<div className='settings-card'><span>{skill}</span></div>);
    });
    return skills;
  };
  return (
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
            {/*<div className='settings-info-name'><span>{user.name}</span></div>*/}
            <div className='settings-info-name'><span>abc</span></div>
          </div>
          <div className='settings-info-name-container'>
            <div className='settings-info-name-header'><span>Last Name</span></div>
            {/*<div className='settings-info-name'><span>{user.name}</span></div>*/}
            <div className='settings-info-name'><span>abc</span></div>
          </div>
          <div className='settings-info-email-container'>
            <div className='settings-info-email-header'><span>Email</span></div>
            {/*<div className='settings-info-email'><span>{user.email}</span></div>*/}
            <div className='settings-info-email'><span>as</span></div>
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
        <div className='settings-button'>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Account;
