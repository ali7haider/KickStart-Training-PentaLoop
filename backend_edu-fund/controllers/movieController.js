import Movie from "../models/movie.js";
import { StatusCodes } from "http-status-codes";
export const getMoviesCustom = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  const [movies, totalMovies] = await Promise.all([
    Movie.find().skip(offset).limit(limit).exec(),
    Movie.countDocuments().exec(),
  ]);
  return res.status(StatusCodes.OK).json({
    movies,
    totalPages: Math.ceil(totalMovies / limit),
    currentPage: page,
    totalMovies,
  });
};

export const getMoviesLibrary = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const options = {
    page: page,
    limit: limit,
  };
  const filter = {};

  const result = await Movie.paginate(filter, options);
  return res.status(StatusCodes.OK).json({
    movies: result.docs,
    pagination: {
      totalItems: result.totalDocs,
      totalPages: result.totalPages,
      currentPage: result.page,
      itemsPerPage: result.limit,
      hasNextPage: result.hasNextPage,
      hasPrevPage: result.hasPrevPage,
      nextPage: result.nextPage,
      prevPage: result.prevPage,
    },
  });
};
