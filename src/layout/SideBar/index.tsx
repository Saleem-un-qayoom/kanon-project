import './index.scss';

import categoryIcon from '../../assets/svg/category-icon.svg';
import messageIcon from '../../assets/svg/messages-icon.svg';
import taskIcon from '../../assets/svg/tasks-icon.svg';
import membersIcon from '../../assets/svg/members-icon.svg';
import settingsIcon from '../../assets/svg/setting-icon.svg';
import addIcon from '../../assets/svg/add-icon.svg';
import bulbGlowBg from '../../assets/svg/bulb-glow-bg-icon.svg';
import bulbGIcon from '../../assets/svg/bulb-icon.svg';
import { useState } from 'react';

const sidebarLinks = [
  {
    title: 'home',
    icon: categoryIcon,
  },
  { title: 'message', icon: messageIcon },
  { title: 'tasks', icon: taskIcon },
  { title: 'members', icon: membersIcon },
  { title: 'settings', icon: settingsIcon },
];

const myProjectsSidebarLink = [
  { color: '#7AC555', title: 'Mobile App' },
  { color: '#FFA500', title: 'Website Redesign' },
  { color: '#E4CCFD', title: 'Design System' },
  { color: '#76A5EA', title: 'Wireframes' },
];

interface PropType {
  sidebarExpanded: boolean;
}

const initialState = {
  selectedMyProjects: myProjectsSidebarLink[0].title,
  selectedSidebar: sidebarLinks[0].title,
};

function SideBar({ sidebarExpanded = false }: PropType) {
  const [{ selectedMyProjects, selectedSidebar }, setState] =
    useState(initialState);
  return (
    <div className="sidebar px-[1rem]">
      {/* SIDEBAR LINK SECTION */}
      <div className="py-[3rem]">
        {sidebarLinks.map(({ title, icon }, index) => (
          <div
            key={index}
            className={`flex cursor-pointer justify-start rounded-[0.6rem] px-[1rem] py-[1rem] text-[#787486] transition-all duration-100 hover:bg-[#5030e514] hover:text-[#0D062D] ${
              index !== sidebarLinks.length - 1 && 'mb-2'
            } ${selectedSidebar === title ? 'bg-[#5030e514]' : ''}`}
            onClick={() =>
              setState(prevData => ({ ...prevData, selectedSidebar: title }))
            }
          >
            <img className="h-[2.4rem] w-[2.4rem]" src={icon} alt="" />
            {sidebarExpanded && (
              <p className="ml-8 text-[1.6rem] font-medium  capitalize">
                {title}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="mx-auto h-[0.1rem] bg-[#DBDBDB]" />

      {/* SIDEBAR MY PROJECTS SECTION */}
      <div className="py-[3rem]">
        <div
          className={`mb-[2rem] flex items-center px-[1rem] ${
            !sidebarExpanded ? 'justify-center' : 'justify-between'
          }`}
        >
          {sidebarExpanded && (
            <h1 className="text-[1.2rem] font-bold uppercase text-[#787486] ">
              my projects
            </h1>
          )}
          <img src={addIcon} className="cursor-pointer" alt="" />
        </div>
        {myProjectsSidebarLink.map(({ color, title }, index) => (
          <div
            key={index}
            className={`mb-[1rem] flex h-[4rem] items-center  rounded-[0.6rem] px-[1rem] text-[#787486] transition-all duration-100 hover:bg-[#5030e514] hover:text-[#0D062D] ${
              !sidebarExpanded ? 'justify-center' : 'justify-between'
            } ${selectedMyProjects === title ? 'bg-[#5030e514]' : ''}`}
            onClick={() =>
              setState(prevData => ({ ...prevData, selectedMyProjects: title }))
            }
          >
            <div className="flex items-center">
              <span
                className="h-[0.8rem] w-[0.8rem] rounded-full"
                style={{ background: color }}
              ></span>
              {sidebarExpanded && (
                <p className="ml-[2rem] text-[1.6rem] font-medium">{title}</p>
              )}
            </div>
            {sidebarExpanded && (
              <div className="hidden items-center hover:flex">
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className="mx-[0.2rem] inline-block h-[0.3rem] w-[0.3rem] rounded-full bg-black"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* THOUGHTS TIME SECTION */}

      {sidebarExpanded && (
        <div className="px-[1rem] ">
          <div className="relative rounded-[1.6rem] bg-[#F5F5F5] px-[1.8rem] py-[2rem] text-center">
            <div className="absolute left-[50%] top-[-3.3rem] h-[6.6rem] w-[6.6rem] -translate-x-[50%] rounded-full bg-[#F5F5F5]">
              <img
                src={bulbGlowBg}
                className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2"
                alt=""
              />
              <img
                src={bulbGIcon}
                className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2"
                alt=""
              />
            </div>
            <h1 className="mb-[1rem] mt-[1.2rem] text-[1.4rem] font-medium">
              Thoughts Time
            </h1>
            <p className="mb-[0.8rem] text-[1.2rem] text-[#787486]">
              We don’t have any notice for you, till then you can share your
              thoughts with your peers.
            </p>
            <div className="flex h-[4rem] items-center justify-center rounded-[0.4rem] bg-white text-[1.4rem] font-medium">
              Write a message
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBar;
