import mongoose from "mongoose";
import { environment } from "../../environments/environment";

export const intializeMongoose = async () => {
  try {
    return await mongoose.connect(environment.mongo_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (e) {
    throw new Error('Mongoose Error');
  }
}
