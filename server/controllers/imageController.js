const express = require("express");
const multer = require("multer");
const jimp = require("jimp");
const path = require("path");

const router = express.Router();

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.originalname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

router.post("/get_colors", upload.single("image"), async (req, res) => {
  try {
    const image = await jimp.read(req.file.path);
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    const data = image.bitmap.data;
    
    const colorMap = {};
    
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const offset = (y * width + x) * 4;
        const red = data[offset];
        const green = data[offset + 1];
        const blue = data[offset + 2];
        
        const hex = `#${red.toString(16).padStart(2, "0")}${green
          .toString(16)
          .padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`;
          
          colorMap[hex] = (colorMap[hex] || 0) + 1;
          }
          }
          
          const sortedColors = Object.entries(colorMap).sort((a, b) => b[1] - a[1]);
          const top2Colors = sortedColors.slice(0, 2).map(([color]) => color);
          res.status(200).json(top2Colors);
          } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Image processing failed" });
  }
});

module.exports = router;
