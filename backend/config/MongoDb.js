import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const conn =  mongoose.connect('mongodb://127.0.0.1/NCR', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    } ,() => {
      console.log("Connected to Mongo Successfully");
  });


  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDatabase;
