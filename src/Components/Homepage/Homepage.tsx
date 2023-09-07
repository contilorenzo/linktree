import "./Homepage.scss";
import Folder from "../Folder/Folder";
import { useEffect, useState } from "react";
import { parse } from "papaparse";
import Loader from "../Loader/Loader";

const Homepage = (): React.ReactElement => {
  const [folders, setFolders] = useState<string[]>([]);

  useEffect(() => {
    parse(
      "https://docs.google.com/spreadsheets/d/1uX6gZs-NDcID7uFzn7dbConMp_oy-YxSn4sRa5vPcns/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          const foldersList = results.data
            .filter((item) => (item as Record<string, string>).Prodotto !== "")
            .map((item) => (item as Record<string, string>).Nicchia)
            .filter((value, index, self) => self.indexOf(value) === index);

          setFolders(foldersList);
        },
      },
    );
  }, []);

  return (
    <>
      <div className="folders">
        {!folders.length && <Loader />}
        {folders.map((folder) => (
          <Folder title={folder} key={folder} />
        ))}
      </div>
    </>
  );
};

export default Homepage;
