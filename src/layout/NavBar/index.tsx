import './index.scss';
import groupIcon from '../../assets/svg/group-icon.svg';
import crossIcon from '../../assets/png/cross-icon.png';

import calendarIcon from '../../assets/svg/calendar-icon.svg';
import messageQuestionIcon from '../../assets/svg/message-question-icon.svg';
import notificationIcon from '../../assets/svg/notification-icon.svg';
import arrowDownIcon from '../../assets/svg/arrow-down-icon.svg';
import userDP from '../../assets/svg/user-dp.svg';
import SearchBarInput from '../../components/SearchBarInput';
import categoryIcon from '../../assets/svg/category-icon.svg';
import messageIcon from '../../assets/svg/messages-icon.svg';
import taskIcon from '../../assets/svg/tasks-icon.svg';
import membersIcon from '../../assets/svg/members-icon.svg';
import settingsIcon from '../../assets/svg/setting-icon.svg';
import bulbGlowBg from '../../assets/svg/bulb-glow-bg-icon.svg';
import bulbGIcon from '../../assets/svg/bulb-icon.svg';
import addIcon from '../../assets/svg/add-icon.svg';
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

const initialState = {
  showNavPopup: false,
};

function NavBar() {
  const [{ showNavPopup }, setState] = useState(initialState);

  return (
    <>
      <div className="navbar">
        <div className="flex items-center">
          <img
            src={groupIcon}
            onClick={() =>
              setState(prevData => ({
                ...prevData,
                showNavPopup: true,
              }))
            }
            className={`mr-[2rem] h-[2.6rem] w-[2.6rem] cursor-pointer sm:inline-block 1300px:hidden`}
          />
          <SearchBarInput className="sm:hidden 1300px:block" />
        </div>
        <div className="ml-[1rem] flex items-center">
          <div className="mr-10 flex">
            {[calendarIcon, messageQuestionIcon, notificationIcon].map(icon => (
              <img src={icon} className="mr-10" alt="" />
            ))}
          </div>
          <div className="flex items-center ">
            <div className="mr-8 text-end leading-8">
              <p className="text-[1.6rem]">Anima Agrawal</p>
              <p className="text-[1.4rem] text-[#787486]">U.P, India</p>
            </div>
            <img src={userDP} className="rounded-full" alt="" />
            <img src={arrowDownIcon} className="ml-4" alt="" />
          </div>
        </div>
      </div>
      {showNavPopup && (
        <div className="absolute left-0 top-0 z-[9999999] h-screen w-screen bg-[#00000086]">
          <div className="h-[100%] w-[90%] overflow-y-auto bg-white p-[2rem]">
            <div className="mb-[2rem] flex justify-end">
              <img
                src={crossIcon}
                className="h-[4rem] w-[4rem] cursor-pointer"
                alt=""
                onClick={() =>
                  setState(prevData => ({
                    ...prevData,
                    showNavPopup: false,
                  }))
                }
              />
            </div>
            <SearchBarInput className="w-full" />
            {/* SIDEBAR LINK SECTION */}
            <div className="py-[3rem]">
              {sidebarLinks.map(({ title, icon }, index) => (
                <div
                  className={`flex cursor-pointer justify-start rounded-[0.6rem] px-[1rem] py-[1rem] text-[#787486] transition-all duration-100 hover:bg-[#5030e514] hover:text-[#0D062D] ${
                    index !== sidebarLinks.length - 1 && 'mb-2'
                  }`}
                >
                  <img className="h-[2.4rem] w-[2.4rem]" src={icon} alt="" />
                  <p className="ml-8 text-[1.6rem] font-medium  capitalize">
                    {title}
                  </p>
                </div>
              ))}
            </div>
            <div className="mx-auto h-[0.1rem] bg-[#DBDBDB]" />

            {/* SIDEBAR MY PROJECTS SECTION */}
            <div className="py-[3rem]">
              <div
                className={`mb-[2rem] flex items-center px-[1rem] ${
                  !true ? 'justify-center' : 'justify-between'
                }`}
              >
                {true && (
                  <h1 className="text-[1.2rem] font-bold uppercase text-[#787486] ">
                    my projects
                  </h1>
                )}
                <img src={addIcon} className="cursor-pointer" alt="" />
              </div>
              {myProjectsSidebarLink.map(({ color, title }) => (
                <div
                  className={`mb-[1rem] flex h-[4rem] items-center  rounded-[0.6rem] px-[1rem] text-[#787486] transition-all duration-100 hover:bg-[#5030e514] hover:text-[#0D062D] ${
                    !true ? 'justify-center' : 'justify-between'
                  }`}
                >
                  <div className="flex items-center">
                    <span
                      className="h-[0.8rem] w-[0.8rem] rounded-full"
                      style={{ background: color }}
                    ></span>
                    {true && (
                      <p className="ml-[2rem] text-[1.6rem] font-medium">
                        {title}
                      </p>
                    )}
                  </div>
                  {true && (
                    <div className="hidden items-center hover:flex">
                      {[...Array(3)].map(() => (
                        <div className="mx-[0.2rem] inline-block h-[0.3rem] w-[0.3rem] rounded-full bg-black" />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* THOUGHTS TIME SECTION */}

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
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
