export const buildMovieFilter = (query) => {
  const filter = {};

  if (query.searchTerm) {
    const searchTerm = query.searchTerm;
    const searchTermAsNumber = parseInt(searchTerm, 10);

    filter.$or = [
      { title: { $regex: searchTerm, $options: 'i' } },
      { genre: { $regex: searchTerm, $options: 'i' } },
    ];

    if (!isNaN(searchTermAsNumber)) {
      filter.$or.push({ releaseYear: searchTermAsNumber });
    }
  }
  return filter;
};

export const buildMovieSort = (query) => {
  const sort = {};

  if (query.sortBy) {
    const [field, order] = query.sortBy.split(':');
    sort[field] = order === 'desc' ? -1 : 1;
  } else {
    sort.createdAt = -1; // Default sort
  }

  return sort;
};


export const getPaginationParams = (query) => {
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 10;
  const offset = (page - 1) * limit;

  return { page, limit, offset };
};
