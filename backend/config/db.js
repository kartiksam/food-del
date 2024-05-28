import mongoose from "mongoose";
export const connnectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://kartiksam123489:22sharma88@food.qqxgjqe.mongodb.net/food-del"
    )
    .then(() => {
      console.log("db connected");
    });
};
