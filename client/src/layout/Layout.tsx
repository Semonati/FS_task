import styles from "./styles.module.css";
import Navbar from "./navbar/Navbar";
import Main from "./main/Main";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.layoutComponents}>
        <div>
          <Navbar />
        </div>
        <div className={styles.layoutContaine}>
          <Main>{children}</Main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
