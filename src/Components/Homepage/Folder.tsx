import "./Folder.scss";
import { type Folder as FolderProps } from "../../types";
import { Link } from "react-router-dom";

const Folder = ({ image, title, id }: Props): React.ReactElement => {
  return (
    <div className="folder-wrapper">
      <Link to={"/products/" + id} className="folder">
        <div className="image">
          <img src={image.src} alt={image.alt} />
        </div>
        <div className="title">{title}</div>
        <div className="arrow-icon">
          <img src="chevron-right.svg" alt="arrow" />
        </div>
      </Link>
    </div>
  );
};

export type Props = FolderProps;

export default Folder;
