import Layout from "./layout/Layout";
import styles from "./styles.module.css";
import Router from "./router/Router"

function App() {
  return (
    <div className={styles.app}>
      <Layout>
        <Router />
      </Layout>
      <div className={styles.center}></div>
    </div>
  );
}

export default App;
