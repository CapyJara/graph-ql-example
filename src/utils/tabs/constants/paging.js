const DEFAULT_PAGING_OFFSET = 0;
const DEFAULT_PAGING_LIMIT = 10;

module.exports = paging => ({
  offset: paging ? paging.offset : DEFAULT_PAGING_OFFSET,
  limit: paging ? paging.limit : DEFAULT_PAGING_LIMIT,
});

