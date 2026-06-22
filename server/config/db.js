import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGODB_URL}`);
    console.log(`mongodb connected: ${conn.connection.host}`);
    return;
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1); // 3. Exit the process if the database connection fail
  }
};

export default connectDB;
