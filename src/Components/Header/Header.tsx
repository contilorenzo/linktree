import "./Header.scss";

const Header = ({ logo, title }: Props): React.ReactElement => {
  return (
    <div className="header-wrapper">
      <div className="logo">
        <img src={logo.src} alt={logo.alt} />
      </div>
      <div className="title">{title}</div>
    </div>
  );
};

export type Props = {
  logo: {
    src: string;
    alt: string;
  };
  title: string;
};

export default Header;
