import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  genre: { type: String, required: true },
  releaseYear: { type: Number, required: true },
});
movieSchema.plugin(mongoosePaginate);

export default mongoose.model("Movie", movieSchema);
