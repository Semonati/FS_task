import React from "react";
import styles from "../styles.module.css";

type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <main className={styles.main}>
      {children}
    </main>
  );
};

export default Main;
