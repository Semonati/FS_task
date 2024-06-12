import { useState } from "react";
import styles from "./styles.module.css";

const AboutUsPage = () => {
  const [name, setName] = useState<string>("My Business");
  const [description, setDescription] = useState<string>(
    "Description about my business"
  );
  const [webUrl, setWebUrl] = useState<string>("www.my-business.com");

  return (
    <div className={styles.aboutUsContainer}>
      <h2 className={styles.flexAround}>About Us</h2>
      <div className={styles.flexAround}>
        <form>
          <div className={styles.inputsContainer}>
            <div className={styles.aboutUsInput}>
              <p>
                <label>Business name: </label>
              </p>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your business name"
              />
            </div>
            <div className={styles.aboutUsInput}>
              <p>
                <label>Description: </label>
              </p>
              <textarea
                rows={10}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description about you business"
              />
            </div>
            <div className={styles.aboutUsInput}>
              <p>
                <label>Website url: </label>
              </p>
              <input
                type="url"
                onChange={(e) => setWebUrl(e.target.value)}
                placeholder="Enter link to your your business site"
              />
            </div>
          </div>

          {/* OUTPUT */}

          <div className={styles.outputContainer}>
            <div className={styles.outputName}>
              <p>{name}</p>
            </div>
            <div className={styles.outputDescription}>
              <span className={styles.description}>{description}</span>
            </div>
            <div className={styles.outputwebUrl}>
              <div>{webUrl}</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AboutUsPage;
