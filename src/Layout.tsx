import { FC, PropsWithChildren } from "react";
import Header from "@/features/header";
import Footer from "@/features/footer";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
