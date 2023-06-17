import './index.scss';
import Content from './Content';
import LogoBar from './LogoBar';
import NavBar from './NavBar';
import SideBar from './SideBar';

interface Props {
  children: JSX.Element | JSX.Element[] | undefined;
}

function Layout({ children }: Props) {
  return (
    <div className="layout">
      <LogoBar />
      <NavBar />
      <SideBar />
      <Content>{children}</Content>
    </div>
  );
}

export default Layout;
