const { GridFsStorage } = require('multer-gridfs-storage');
const multer = require('multer');
const path = require('path');
const randomstring = require('randomstring');

const PREFIX_FILE_NAME = 'wnc21';
const MAX_LENGTH_RANDOM_NAME = 5;

const storage = new GridFsStorage({
  url: process.env.DB_URL,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const extension = path.extname(file.originalname);
      const randomName = randomstring.generate(MAX_LENGTH_RANDOM_NAME);

      const fileInfo = {
        filename: `${PREFIX_FILE_NAME}-${randomName}${extension}`,
      };
      resolve(fileInfo);
    });
  },
});

const uploadFile = multer({ storage });

module.exports = uploadFile;
