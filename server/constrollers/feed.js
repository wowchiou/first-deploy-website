exports.getTest = (req, res, next) => {
  res.status(200).json({
    message: 'API OK!',
    title: 'Hello World',
  });
};
