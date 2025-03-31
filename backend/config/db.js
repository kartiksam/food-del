import mongoose from "mongoose";
export const connnectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI)

    .then(() => {
      console.log("db connected");
    });
};
