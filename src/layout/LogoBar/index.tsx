import './index.scss';

import logoIcon from '../../assets/svg/logo-icon.svg';
import groupIcon from '../../assets/svg/group-icon.svg';

interface PropType {
  sidebarExpanded: boolean;
  toggleSidebar: () => void;
}

function LogoBar({ sidebarExpanded = true, toggleSidebar }: PropType) {
  return (
    <div
      className={`logo-bar ${!sidebarExpanded && 'flex-col justify-center'}`}
    >
      <div className="flex items-center">
        <img className="h-[2.4rem] w-[2.4rem]" src={logoIcon} alt="" />
        {sidebarExpanded && (
          <p className="pl-3 text-[2rem] font-bold">Project M.</p>
        )}
      </div>
      <img
        className={`h-[2.6rem] w-[2.6rem] cursor-pointer ${
          !sidebarExpanded && 'mt-[1rem]'
        }`}
        onClick={toggleSidebar}
        src={groupIcon}
        alt=""
      />
    </div>
  );
}

export default LogoBar;
