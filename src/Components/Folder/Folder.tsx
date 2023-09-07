import "./Folder.scss";
import { Link } from "react-router-dom";

const Folder = ({ title }: Props): React.ReactElement => {
  return (
    <div className="folder-wrapper">
      <Link to={"products/" + title} className="folder">
        <div className="space"></div>
        <div className="title">Amazon {title}</div>
        <div className="arrow-icon">
          <img src="chevron-right.svg" alt="arrow" />
        </div>
      </Link>
    </div>
  );
};

export type Props = {
  title: string;
};

export default Folder;
