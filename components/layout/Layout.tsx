import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* ...existing layout markup */}
      {children}
    </>
  );
};

export default Layout;