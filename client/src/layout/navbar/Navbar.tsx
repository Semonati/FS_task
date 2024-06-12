import { Link, useLocation } from "react-router-dom";

import { ROUTES } from "@/types/routerPath";
import styles from "@/layout/styles.module.css";

const Navbar = () => {
  const location = useLocation().pathname;

  return (
    <nav>
      <div className={styles.navbarConatiner}>
        <Link to={ROUTES.ROOT} className={styles.link}>
          <button
            className={`${styles.aboutUs} ${
              location === ROUTES.ROOT && styles.active
            }`}
          >
            About Us
          </button>
        </Link>

        <Link to={ROUTES.IMAGES} className={styles.link}>
          <button
            className={`${styles.images} ${
              location === ROUTES.IMAGES && styles.active
            }`}
          >
            Images
          </button>
        </Link>
        
        <Link to={ROUTES.OPENING_HOURS} className={styles.link}>
          <button
            className={`${styles.OpeningHours} ${
              location === ROUTES.OPENING_HOURS && styles.active
            }`}
          >
            Opening Hours
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
