import './index.scss';

import logoIcon from '../../assets/svg/logo-icon.svg';
import groupIcon from '../../assets/svg/group-icon.svg';

function LogoBar() {
  return (
    <div className="logo-bar">
      <div className="flex items-center">
        <img className="h-[2.4rem] w-[2.4rem]" src={logoIcon} alt="" />
        <p className="pl-3 text-[2rem] font-bold">Project M.</p>
      </div>
      <img className="h-[2.6rem] w-[2.6rem]" src={groupIcon} alt="" />
    </div>
  );
}

export default LogoBar;
