declare module Article {
  type ProfileImage = {
    id: number
    uuidFileName: string
  }

  type Author = {
    id: number
    nickname: string
    profileImage: ProfileImage
  }

  type Tag = {
    tag: string
    description: string
  }

  type TagDTO = {
    resultCode: string
    result: Tag[]
  }

  type MainContent = {
    id: number
    category: string
    tag: string
    title: string
    author: Author
    createdAt: number
    updatedAt: number
    views: number
    likes: number
    commentCount: number
    containImage: boolean
  }

  type MainContentParams = {
    tag?: string
    page?: number
    size?: number
  }

  type MainContentDTO = {
    resultCode: string
    result: {
      content: MainContent[]
      pageable: {
        sort: {
          empty: boolean
          sorted: boolean
          unsorted: boolean
        }
        offset: number
        pageSize: number
        pageNumber: number
        paged: boolean
        unpaged: boolean
      }
      last: boolean
      totalPages: number
      totalElements: number
      size: number
      number: number
      sort: {
        empty: boolean
        sorted: boolean
        unsorted: boolean
      }
      first: boolean
      numberOfElements: number
      empty: boolean
    }
  }

  type BaseDetailContent = {
    id: number
    category: string
    tag: string
    title: string
    status: string
    views: number
    likes: number
    liked: boolean
    content: string
    createdAt: number
    updatedAt: number
    author: Author
  }

  type BaseDetailContentDTO = {
    resultCode: string
    result: BaseDetailContent
  }

  type MovieDetailContent = BaseDetailContent

  type MovieDetailContentDTO = {
    resultCode: string
    result: MovieDetailContent
  }

  type FilmUniverseDetailContent = BaseDetailContent & {
    startAt: string
    endAt: string
  }

  type FilmUniverseDetailContentDTO = {
    resultCode: string
    result: FilmUniverseDetailContent
  }

  type CriticDetailContent = BaseDetailContent

  type CriticDetailContentDTO = {
    resultCode: string
    result: CriticDetailContent
  }

  type ChildComment = Omit<Comment, 'childComments'>

  type Comment = {
    id: number
    content: string
    status: string
    likes: number
    createdAt: number
    updatedAt: number
    author: Author
    childComments: ChildComment[]
    managerComment: boolean
  }

  type CommentDTO = {
    resultCode: string
    result: {
      commentCount: number
      comments: Comment[]
    }
  }

  type Notice = {
    id: number
    tag: string
    isContainImage: boolean
    title: string
    comments: number[]
    writer: User
    createAt: string
    updateAt: string
    views: number
    likes: number
    category: 'notice'
  }

  type Popular = {
    id: number
    title: string
    author: {
      id: number
      nickname: string
    }
    category: string
    containImage: boolean
  }

  type PopularDTO = {
    resultCode: string
    result: Popular[]
  }
}
