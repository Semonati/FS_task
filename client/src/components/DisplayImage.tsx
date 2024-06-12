import { useState } from "react";

import styles from "./styles.module.css";
import { Image } from "@/types/types";

type Props = {
  images?: Image[];
  image?: string;
};

const DisplayImage = ({ images = [], image }: Props) => {
  const [targetImage, setTargetImage] = useState<number>(0);

  const changePicture = (value: string) => {
    if (value == "next")
      return targetImage === images.length - 1
        ? setTargetImage(0)
        : setTargetImage(targetImage + 1);

    if (value == "prev")
      return targetImage === 0
        ? setTargetImage(images.length - 1)
        : setTargetImage(targetImage - 1);
  };

  return (
    <div className={styles.displayImage}>
      {images?.length != 0 && (
        <div className={styles.card}>
          <img
            alt="search"
            src={images[targetImage]?.largeImageURL}
            max-width="500px"
          />
          <div className={styles.changeImage}>
            <div className={styles.buttons}>
              <button onClick={() => changePicture("prev")}>Prev</button>
              <button onClick={() => changePicture("next")}>Next</button>
            </div>
          </div>
        </div>
      )}
      <div className={styles.card}>
        {image && <img alt="search" src={image} max-width="500px" />}
      </div>
    </div>
  );
};

export default DisplayImage;
