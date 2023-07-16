import React from "react";
import { SidebarStyle } from "../../component/sidebar/sidebarstyle";

export const Sidebar = () => {
  return (
    <SidebarStyle>
      <div className="sidebar">
        <span className="sidebartitle">ABOUT ME</span>
        <img
        src="https://www.unigreet.com/wp-content/uploads/2022/01/today-best-whatsapp-dp-2022.jpg"
        alt=""
        className="sidebarimg"
      />
       <p>
        Having a ‘About Me’ page on your website is crucial for your business so
        that you can create  that a good first impression and build strong connections
        with your readers. An ‘About Me’ page should convey who you are, what
        your values and principles are, how you got to where you are, and why
        your product or service is important to you. If writing an ‘About Me’
        page seems daunting, you can use an about us template to help you out.
      </p>
      </div>
      
     
      <div className="sidebaritem">
      <span className="sidebartitle">CATEGORIES</span>
        <ul className="sidebarlist">
          <li className="sidebarlistitem">LIFE</li>
          <li className="sidebarlistitem">MUSIC </li>
          <li className="sidebarlistitem">TRAVEL</li>
          <li className="sidebarlistitem">TECH</li>
          <li className="sidebarlistitem">SPORTS</li>
          <li className="sidebarlistitem">MOVIE</li>
          <li className="sidebarlistitem">BEACH</li>
          <li className="sidebarlistitem">MOUNTAINS</li>
        </ul>
      </div>
    </SidebarStyle>
  );
};
