import "./App.scss";
import { MOCK_FOLDERS } from "./__fixtures/mocks";
import Folder from "./Components/Folder/Folder";
import Header from "./Components/Header/Header";
import Social from "./Components/Social/Social";

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="content">
        <Header
          logo={{ src: "logo.png", alt: "Gadget Hunter logo" }}
          title="Gadget Hunter"
        />
        <Social />
        <div className="folders">
          {MOCK_FOLDERS.map((folder) => (
            <Folder id={folder.id} title={folder.title} image={folder.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
