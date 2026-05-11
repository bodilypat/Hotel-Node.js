//src/core/utils/pagination.js 
export const getPagination = (page = 1, limit = 10) => {
    const currentPage = Math.max(Number(page), 1);

    const perPage = Math.max(Number(limit), 1);

    const skip = (currentPage - 1) * perPage;

    return {
        skip,
        take: perPage,
        page: currentPage,
        limit: perPage,
    };
};

export const paginationMeta = ({
    totalItems,
    currentPage,
    limit,
}) => {
    const totalPages = Math.ceil(totalItems / limit);
    return {
        totalItems,
        currentPage,
        limit,
        totalPages,
        hasNextPage: page < Math.ceil(totalItems / limit),
        hasPreviousPage: page > 1,
    };
};


