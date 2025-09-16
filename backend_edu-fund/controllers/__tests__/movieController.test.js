import { getMoviesCustom, getMoviesLibrary } from "../movieController.js";
import {
  buildMovieFilter,
  buildMovieSort,
  getPaginationParams,
} from "../../utils/queryHelpers.js";
import Movie from "../../models/movie.js";
import { StatusCodes } from "http-status-codes";
jest.mock("../../models/movie.js");
jest.mock("../../utils/queryHelpers.js");

const mockLogger = {
  info: jest.fn(),
};

const createMockRequest = (query = {}) => ({
  query,
  logger: mockLogger,
});

const createMockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe("getMoviesCustom", () => {
  it("should fetch movies with custom pagination and return correct response", async () => {
    const mockQuery = { page: "2", limit: "5", searchTerm: "action" };
    const mockFilter = { $or: [] };
    const mockSort = { createdAt: -1 };
    const mockPagination = { page: 2, limit: 5, offset: 5 };

    const fakeMovies = [{ title: "Movie 1" }, { title: "Movie 2" }];
    const fakeTotalMovies = 12;
    buildMovieFilter.mockReturnValue(mockFilter);
    buildMovieSort.mockReturnValue(mockSort);
    getPaginationParams.mockReturnValue(mockPagination);

    const mockExec = jest
      .fn()
      .mockResolvedValueOnce(fakeMovies)
      .mockResolvedValueOnce(fakeTotalMovies);
    Movie.find.mockReturnValue({
      sort: jest.fn().mockReturnValue({
        skip: jest.fn().mockReturnValue({
          limit: jest.fn().mockReturnValue({
            exec: mockExec,
          }),
        }),
      }),
    });
    Movie.countDocuments.mockReturnValue({ exec: mockExec });

    const req = createMockRequest(mockQuery);
    const res = createMockResponse();

    await getMoviesCustom(req, res);
    expect(buildMovieFilter).toHaveBeenCalledWith(mockQuery);
    expect(buildMovieSort).toHaveBeenCalledWith(mockQuery);
    expect(getPaginationParams).toHaveBeenCalledWith(mockQuery);

    expect(Movie.find).toHaveBeenCalledWith(mockFilter);
    expect(Movie.countDocuments).toHaveBeenCalledWith(mockFilter);
    expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
    expect(res.json).toHaveBeenCalledWith({
      movies: fakeMovies,
      totalPages: Math.ceil(fakeTotalMovies / mockPagination.limit),
      currentPage: mockPagination.page,
      totalMovies: fakeTotalMovies,
    });

    expect(mockLogger.info).toHaveBeenCalledWith(
      "Fetched movies (custom pagination)",
      {
        count: fakeMovies.length,
        totalMovies: fakeTotalMovies,
        page: mockPagination.page,
        limit: mockPagination.limit,
      }
    );
  });
  it("should handle errors and propagate them (to be caught by your errorHandler middleware)", async () => {
    buildMovieFilter.mockReturnValue({});
    buildMovieSort.mockReturnValue({});
    getPaginationParams.mockReturnValue({ page: 1, limit: 10, offset: 0 });

    Movie.find.mockImplementation(() => {
      throw new Error("Database connection failed");
    });

    const req = createMockRequest();
    const res = createMockResponse();

    await expect(getMoviesCustom(req, res)).rejects.toThrow(
      "Database connection failed"
    );
  });
});

describe("getMoviesLibrary", () => {
  it("should fetch movies with library pagination and return correct response", async () => {
    const mockQuery = { page: "2", limit: "5", searchTerm: "action" };
    const mockFilter = { $or: [] };
    const mockSort = { createdAt: -1 };
    const mockPagination = { page: 2, limit: 5, offset: 5 };

    const fakeMovies = [{ title: "Movie 1" }, { title: "Movie 2" }];
    const fakeTotalMovies = 12;
    buildMovieFilter.mockReturnValue(mockFilter);
    buildMovieSort.mockReturnValue(mockSort);
    getPaginationParams.mockReturnValue(mockPagination);

    const mockExec = jest
      .fn()
      .mockResolvedValueOnce(fakeMovies)
      .mockResolvedValueOnce(fakeTotalMovies);
    Movie.find.mockReturnValue({
      sort: jest.fn().mockReturnValue({
        skip: jest.fn().mockReturnValue({
          limit: jest.fn().mockReturnValue({
            exec: mockExec,
          }),
        }),
      }),
    });
    Movie.countDocuments.mockReturnValue({ exec: mockExec });

    const req = createMockRequest(mockQuery);
    const res = createMockResponse();

    await getMoviesCustom(req, res);
    expect(buildMovieFilter).toHaveBeenCalledWith(mockQuery);
    expect(buildMovieSort).toHaveBeenCalledWith(mockQuery);
    expect(getPaginationParams).toHaveBeenCalledWith(mockQuery);

    expect(Movie.find).toHaveBeenCalledWith(mockFilter);
    expect(Movie.countDocuments).toHaveBeenCalledWith(mockFilter);
    expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
    expect(res.json).toHaveBeenCalledWith({
      movies: fakeMovies,
      totalPages: Math.ceil(fakeTotalMovies / mockPagination.limit),
      currentPage: mockPagination.page,
      totalMovies: fakeTotalMovies,
    });

    expect(mockLogger.info).toHaveBeenCalledWith(
      "Fetched movies (custom pagination)",
      {
        count: fakeMovies.length,
        totalMovies: fakeTotalMovies,
        page: mockPagination.page,
        limit: mockPagination.limit,
      }
    );
  });
  it("should handle errors and propagate them (to be caught by your errorHandler middleware)", async () => {
    buildMovieFilter.mockReturnValue({});
    buildMovieSort.mockReturnValue({});
    getPaginationParams.mockReturnValue({ page: 1, limit: 10, offset: 0 });

    Movie.find.mockImplementation(() => {
      throw new Error("Database connection failed");
    });

    const req = createMockRequest();
    const res = createMockResponse();

    await expect(getMoviesCustom(req, res)).rejects.toThrow(
      "Database connection failed"
    );
  });
});
