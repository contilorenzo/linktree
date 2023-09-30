import "./Folder.scss";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";

const collectAnalytics = (folderTitle: string) => {
  ReactGA.event({
    category: "Folder",
    action: "Clicked on folder",
    label: folderTitle,
  });
};

const Folder = ({ title }: Props): React.ReactElement => {
  return (
    <div className="folder-wrapper">
      <Link
        to={"products/" + title}
        className="folder"
        onClick={() => collectAnalytics(title)}
      >
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
