import { FC, PropsWithChildren } from "react";
import Header from "./features/Header";
import Footer from "./features/Footer";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
