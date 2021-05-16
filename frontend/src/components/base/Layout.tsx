import React from "react";

const Layout = ({ children }:{children:React.ReactNode})=>{
  return(
    <div className='layout-container'>
      <div className='layout-content-container'>
        {children}
      </div>
    </div>
  );
};
export default Layout;
