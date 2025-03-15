const getResult = (req, res, next) => {
  console.log("Student requested for result");

  res.status(200).json({ message: "success", data: "student passed" });
};

const createResult = (req, res, next) => {
  const resultReleaseDetail = new Date().toLocaleString();
  const { student, subject, grade } = req.body;

  console.log(student, subject, grade, resultReleaseDetail);
  res.status(201).json({
    message: "result uploaded successfully",
    data: { student, subject, grade, resultReleaseDetail },
  });
};

module.exports = { getResult, createResult };
