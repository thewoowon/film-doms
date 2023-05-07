export const getPages = ({
  currentPage,
  count,
  totalPage,
}: {
  currentPage: number
  count: number
  totalPage: number
}) => {
  const pages = Array.from({ length: count }, (_, index) => {
    const page = ~~((currentPage - 1) / count) * count + index + 1

    return {
      pageNum: page <= totalPage ? page : null,
      isActive: page === currentPage,
    }
  }).filter(
    (page): page is { pageNum: number; isActive: boolean } =>
      page.pageNum !== null
  )

  return pages
}
