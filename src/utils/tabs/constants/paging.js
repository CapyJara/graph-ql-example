const DEFAULT_PAGING_OFFSET = 0;
const DEFAULT_PAGING_LIMIT = 50;

module.exports = {
  DEFAULT_PAGING_OFFSET,
  DEFAULT_PAGING_LIMIT,
  getOffsetLimit = paging => ({
    offset: paging ? paging.offset : DEFAULT_PAGING_OFFSET,
    limit: paging ? paging.limit : DEFAULT_PAGING_LIMIT,
  })
}