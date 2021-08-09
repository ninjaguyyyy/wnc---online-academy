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
    if (req.headers['range']) {
      var parts = req.headers['range'].replace(/bytes=/, '').split('-');
      var partialstart = parts[0];
      var partialend = parts[1];

      var start = parseInt(partialstart, 10);
      var end = partialend ? parseInt(partialend, 10) : file.length - 1;
      var chunksize = end - start + 1;

      res.writeHead(206, {
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Range': 'bytes ' + start + '-' + end + '/' + file.length,
        'Content-Type': file.contentType,
      });

      gfs
        .createReadStream({
          _id: file._id,
          range: {
            startPos: start,
            endPos: end,
          },
        })
        .pipe(res);
    } else {
      res.header('Content-Length', file.length);
      res.header('Content-Type', file.contentType);

      gfs.createReadStream(file.filename).pipe(res);
    }
  } else {
    return res.status(404).json({ msg: 'No a video file' });
  }
};
