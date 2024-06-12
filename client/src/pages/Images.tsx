import { useEffect, useState } from "react";
import axios from "axios";

import handleApi from "@/services/HandleApi";
import DisplayImage from "../components/DisplayImage";
import styles from "./styles.module.css";

import { Image } from "../types/types";

const Images = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState<Image[]>([]);
  const [image, setImage] = useState<string | ArrayBuffer | null>("");
  const { handleGetMainsColors, value } = handleApi();
  

  if (value.colors) {
    document.documentElement.style.setProperty(
      `--background-color`,
      value.colors[0]
    );
    document.documentElement.style.setProperty(
      `--text-color`,
      value.colors[1]
    );
  }

  useEffect(() => {
    value;
  }, [value]);

  useEffect(() => {
    const fetchImages = async () => {
      const result = await axios.get(
        `https://pixabay.com/api/?key=44236742-b9e1843a07a03d8a483d82fd1&q=${query}&per_page=5`
      );
      const data = result.data.hits;
      setImages(data);
    };

    if (query) {
      fetchImages();
      setImage("");
    }
  }, [query, images]);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);

    setImage(event.target.files[0])

    const formData = new FormData();
    formData.append("image", file);
    handleGetMainsColors(formData);
    setQuery("");
  };

  return (
    <div className={styles.images}>
      <h2>Images</h2>
      <div className={styles.imagesContainer}>
        <div>
          <div className={styles.importImagesContainer}>
            <div className={styles.importImages}>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for picture"
              />
              <button>
                <label htmlFor="files">Select file</label>
              </button>
            </div>
          </div>
          {query.length ? (
            <div className={styles.imageGrid}>
              <DisplayImage images={images} />
            </div>
          ) : (
            <>{query && <p>No images found.</p>}</>
          )}
          <input
            type="file"
            id="files"
            className={styles.imageInput}
            onChange={handleFileChange}
          />
        </div>
        <div className={styles.uploadImage}>
          {image && <DisplayImage image={image} />}
        </div>
      </div>
    </div>
  );
};

export default Images;
