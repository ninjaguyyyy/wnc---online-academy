module.exports.upload = async (req, res) => {
  res.status(200).json({
    success: true,
    files: req.files.map((file) => {
      return { filename: file.filename };
    }),
  });
};
