exports.notFound = (req, res) => {
  res.status(404).json({
    success: false,
    message: "Ийм endpoint байхгүй"
  });
};
//medehgua
//idunnw
//yagaad bna ve
exports.errorHandler = (err, req, res, next) => {
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({
      success: false,
      message: "JSON формат буруу байна"
    });
  }
  console.error(err);
  res.status(500).json({
    success: false,
    message: "Серверийн алдаа"
  });
};