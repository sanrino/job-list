module.exports = function (err, req, res, next) {
  if (err && err.status !== undefined && err.message !== undefined) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: "Непредвиденная ошибка!" });
};