module.exports.upload = async (req, res) => {
  console.log(req.files);

  res.status(200).json({
    success: true,
    files: req.files.map((file) => {
      return { filename: file.filename };
    }),
  });
};
