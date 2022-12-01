import { useEffect } from "react";
import { LayoutProps } from "../types/LayoutProps";

const Layout = ({ children, pageTitle }: LayoutProps) => {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return <main>{children}</main>;
};

export default Layout;
