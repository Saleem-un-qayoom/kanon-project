import './index.scss';
import Content from './Content';
import LogoBar from './LogoBar';
import NavBar from './NavBar';
import SideBar from './SideBar';
import { useState } from 'react';

interface Props {
  children: JSX.Element | JSX.Element[] | undefined;
}

const initialState = {
  sidebarExpanded: true,
};

function Layout({ children }: Props) {
  const [{ sidebarExpanded }, setState] = useState(initialState);

  const toggleSidebar = () => {
    setState(prevData => ({ ...prevData, sidebarExpanded: !sidebarExpanded }));
  };
  return (
    <div
      className={`layout ${
        sidebarExpanded ? 'layout-sidebar-expanded' : 'layout-sidebar-collapsed'
      }`}
    >
      <LogoBar
        sidebarExpanded={sidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <NavBar />
      <SideBar sidebarExpanded={sidebarExpanded} />
      <Content>{children}</Content>
    </div>
  );
}

export default Layout;
