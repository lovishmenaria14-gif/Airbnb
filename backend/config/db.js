import mongoose from "mongoose";

const connectDb = async () => {
  try {
    console.log("Connecting to DB...");

    await mongoose.connect(process.env.MONGODB_URL);
    console.log("State:", mongoose.connection.readyState);

    console.log("DB connected");
  } catch (error) {
    console.log("DB Error:", error);
  }
};

export default connectDb;