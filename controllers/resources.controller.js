const Grid = require('gridfs-stream');
const mongoose = require('mongoose');
const { ResourcesResponses } = require('../helpers/responses');
const FILE_TYPES = require('../constants/file-type.constant');

var connection = mongoose.createConnection(process.env.DB_URL);
let gfs;
connection.once('open', function () {
  gfs = Grid(connection.db, mongoose.mongo);
});

module.exports.displayImage = async (req, res) => {
  const file = await gfs.files.findOne({ filename: req.params.filename });

  if (!file || file.length === 0) {
    return res.status(404).json({ msg: 'No file exists' });
  }

  if (FILE_TYPES.Image.includes(file.contentType)) {
    const readStream = gfs.createReadStream(file.filename);
    readStream.pipe(res);
  } else {
    return res.status(404).json({ msg: 'Not a image file' });
  }
};

module.exports.displayVideo = async (req, res) => {
  const file = await gfs.files.findOne({ filename: req.params.filename });

  if (!file || file.length === 0) {
    return res.status(404).json({ msg: 'No file exists' });
  }

  if (FILE_TYPES.Video.includes(file.contentType)) {
    const readStream = gfs.createReadStream(file.filename);
    readStream.pipe(res);
  } else {
    return res.status(404).json({ msg: 'No a video file' });
  }
};
