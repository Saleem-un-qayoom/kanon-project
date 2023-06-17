import './index.scss';

import calendarIcon from '../../assets/svg/calendar-icon.svg';
import messageQuestionIcon from '../../assets/svg/message-question-icon.svg';
import notificationIcon from '../../assets/svg/notification-icon.svg';
import arrowDownIcon from '../../assets/svg/arrow-down-icon.svg';
import userDP from '../../assets/svg/user-dp.svg';

function NavBar() {
  return (
    <div className="navbar">
      <div className="h-[5rem] w-[40.1rem] bg-red-500"></div>
      <div className="flex items-center">
        <div className="mr-10 flex">
          {[calendarIcon, messageQuestionIcon, notificationIcon].map(icon => (
            <img src={icon} className="mr-10" alt="" />
          ))}
        </div>
        <div className="flex items-center">
          <div className="mr-8 text-end leading-8">
            <p className="text-[1.6rem]">Anima Agrawal</p>
            <p className="text-[1.4rem] text-[#787486]">U.P, India</p>
          </div>
          <img src={userDP} className="rounded-full" alt="" />
          <img src={arrowDownIcon} className="ml-4" alt="" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
