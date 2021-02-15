import mongoose from "mongoose";
import Todo from "./todo";

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
};

const models = { Todo };

export { connectDb };

export default models;
