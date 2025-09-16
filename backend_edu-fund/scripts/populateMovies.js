import mongoose from "mongoose";
import { readFile } from "fs/promises";
import Movie from "../models/movie.js";
import { mongoUri } from "../config/environment.js";

async function populate() {
  try {
    const data = await readFile(new URL("./MOCK_DATA.json", import.meta.url));
    const movies = JSON.parse(data);

    await mongoose.connect(mongoUri);

    await Movie.deleteMany();

    await Movie.insertMany(movies);

    console.log("Database populated with movies successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error populating database:", error);
    process.exit(1);
  }
}

populate();
