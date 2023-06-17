import './index.scss';

interface Props {
  children: JSX.Element | JSX.Element[] | undefined;
}

function Content({ children }: Props) {
  return <div className="content">{children}</div>;
}

export default Content;
