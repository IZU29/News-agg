module.exports = (err, req, res, next) => {
  err.statusCode ||= 500;
  err.status ||= "error";

  // 🔥 Dev vs Production handling
  if (process.env.NODE_ENV === "development") {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      stack: err.stack,
    });
  }

  // ✅ Production
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }

  // 💣 Programming / unknown errors
  console.error("💥 UNEXPECTED ERROR:", err);

  return res.status(500).json({
    status: "error",
    message: "Something went wrong",
  });
};
