import Movie from "../models/movie.js";
import { StatusCodes } from "http-status-codes";
import {
  buildMovieFilter,
  buildMovieSort,
  getPaginationParams,
} from "../utils/queryHelpers.js";

export const getMoviesCustom = async (req, res) => {
  const filter = buildMovieFilter(req.query);
  const sort = buildMovieSort(req.query);
  const { page, limit, offset } = getPaginationParams(req.query);

  const [movies, totalMovies] = await Promise.all([
    Movie.find(filter).sort(sort).skip(offset).limit(limit).exec(),
    Movie.countDocuments(filter).exec(),
  ]);

  req.logger.info("Fetched movies (custom pagination)", {
    count: movies.length,
    totalMovies,
    page,
    limit,
  });

  return res.status(StatusCodes.OK).json({
    movies,
    totalPages: Math.ceil(totalMovies / limit),
    currentPage: page,
    totalMovies,
  });
};

export const getMoviesLibrary = async (req, res) => {
  const filter = buildMovieFilter(req.query);
  const sort = buildMovieSort(req.query);
  const { page, limit } = getPaginationParams(req.query);

  const options = { page, limit, sort };
  const result = await Movie.paginate(filter, options);

  req.logger.info("Fetched movies (library pagination)", {
    count: result.docs.length,
    totalMovies: result.totalDocs,
    page: result.page,
    limit: result.limit,
  });

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
