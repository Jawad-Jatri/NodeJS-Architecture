const connectDB = (mongoose) => {
  if (process.env.ENVIRONMENT === "development") {
    mongoose.connect(process.env.MONGODB_CON_STRING_DEV);
  } else {
    mongoose.connect(process.env.MONGODB_CON_STRING_PRODUCTION);
  }

  const db = mongoose.connection;
  db.on("error", (err) => {
    console.log(err);
  });
  db.once("open", () => {
    console.log("Database Connection Established");
  });
};

module.exports = {
  connectDB
}