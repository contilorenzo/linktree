import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Homepage from "./Components/Homepage/Homepage";
import Products from "./Components/Products/Products";

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route path="/:locale/" element={<Layout />}>
              <Route index element={<Homepage />} />
              <Route
                path="/:locale/products/:folderId"
                element={<Products />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
