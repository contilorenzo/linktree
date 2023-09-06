import "./Homepage.scss";
import { MOCK_FOLDERS } from "../../__fixtures/mocks";
import Folder from "../Homepage/Folder";

const Homepage = (): React.ReactElement => {
  return (
    <>
      <div className="folders">
        {MOCK_FOLDERS.map((folder) => (
          <Folder {...folder} />
        ))}
      </div>
    </>
  );
};

export default Homepage;
