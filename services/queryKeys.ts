const queryKeys = {
  main: {
    bannerDTO: ['main', 'bannerDTO'],
    recentDTO: ['main', 'recentDTO'],
    movieDTO: ['main', 'movieDTO'],
    filmUniverseDTO: ['main', 'filmUniverseDTO'],
    criticDTO: ['main', 'criticDTO'],
  },
  article: {
    tagDTOByCategory: (category: string) => [
      'article',
      'tagDTOByCategory',
      category,
    ],
    mainContentDTOByCategory: (
      category: string,
      params: Article.MainContentParams
    ) => ['article', 'mainContentDTOByCategory', category, params],
    detailContentDTOByCategoryById: (category: string, id: number) => [
      'article',
      'detailContentDTOByCategoryById',
      category,
      id,
    ],
    commentDTOByCategoryByArticleId: (category: string, id: number) => [
      'article',
      'commentDTOByArticleId',
      category,
      id,
    ],
    noticeDTO: ['article', 'noticeDTO'],
    popularDTO: ['article', 'popularDTO'],
  },
  myPage: {
    interestMovie: ['myPage', 'interestMovie'],
    userInfo: ['myPage', 'userInfo'],
    activityArticle: (params: User.Activity.Params) => [
      'myPage',
      'activityArticle',
      params,
    ],
    activityComment: (params: User.Activity.Params) => [
      'myPage',
      'activityComment',
      params,
    ],
  },
} as const

export default queryKeys
