import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Social from "../Social/Social";

const Layout = (): React.ReactElement => {
  return (
    <>
      <Header
        logo={{ src: "/logo.png", alt: "Gadget Hunter logo" }}
        title="Gadget Hunter"
      />
      <Social />
      <Outlet />
    </>
  );
};

export default Layout;
