import { ReactElement, useEffect } from "react";

type Props = {
  children: ReactElement;
  pageTitle: string;
};

const Layout = ({ children, pageTitle }: Props) => {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return <main>{children}</main>;
};

export default Layout;
