declare module User {
  type InterestMovie = string

  type Info = {
    id: number
    email: string
    nickname: string
    createdAt: string
    profileImage: {
      id: number
      uuidFileName: string
    }
    interestMovieList: InterestMovie[]
  }

  type InfoDTO = {
    resultCode: string
    result: Info
  }

  declare module Activity {
    type Params = {
      page?: number
      size?: number
    }

    type Article = {
      id: number
      tag: string
      title: string
      commentCount: number
      createdAt: string
      views: number
      likes: number
      containImage: boolean
    }

    type ArticleDTO = {
      resultCode: string
      result: {
        content: Article[]
        totalElements: number
        totalPages: number
        size: number
      }
    }

    type Comment = {
      id: number
      content: string
      childrenCommentCount: number
      createdAt: string
    }

    type CommentDTO = {
      resultCode: string
      result: {
        content: Comment[]
        totalElements: number
        totalPages: number
        size: number
      }
    }
  }
}
