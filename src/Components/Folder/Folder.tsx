import "./Folder.scss";
import { type Folder as FolderProps } from "../../types";

const Folder = ({ image, title }: Props): React.ReactElement => {
  return (
    <div className="folder-wrapper">
      <div className="folder">
        <div className="image">
          <img src={image.src} alt={image.alt} />
        </div>
        <div className="title">{title}</div>
        <div className="arrow-icon">
          <img src="chevron-right.svg" alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export type Props = FolderProps;

export default Folder;
