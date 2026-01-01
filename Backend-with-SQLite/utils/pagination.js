/**
 * Pagination Helper
 * Calculates pagination metadata for API responses
 */
export const getPagination = (page = 1, limit = 10) => {
  const skip = (parseInt(page) - 1) * parseInt(limit);
  return {
    skip,
    limit: parseInt(limit),
    page: parseInt(page),
  };
};

/**
 * Get Pagination Metadata
 * Returns pagination info for response
 */
export const getPaginationMeta = (total, page = 1, limit = 10) => {
  const pages = Math.ceil(total / limit);
  return {
    page: parseInt(page),
    limit: parseInt(limit),
    total,
    pages,
    hasNext: page < pages,
    hasPrev: page > 1,
  };
};

