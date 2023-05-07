declare module Main {
  type Image = {
    id: number
    uuidFileName: string
  }

  type Author = {
    id: number
    nickname: string
  }

  type Recent = {
    id: number
    category: string
    tag: string
    title: string
    commentCount: number
  }

  type RecentDTO = {
    resultCode: string
    result: Recent[]
  }

  type Movie = {
    id: number
    category: string
    tag: string
    title: string
    commentCount: number
  }

  type MovieDTO = {
    resultCode: string
    result: Movie[]
  }

  type FilmUniverse = {
    id: number
    category: string
    tag: string
    title: string
    mainImage: Image
    author: Author
    startAt: string
    endAt: string
  }

  type FilmUniverseDTO = {
    resultCode: string
    result: FilmUniverse[]
  }

  type Critic = {
    id: number
    category: string
    tag: string
    title: string
    mainImage: Image
    author: Author
    description: string
    createdAt: number
  }

  type CriticDTO = {
    resultCode: string
    result: Critic[]
  }

  type Banner = {
    id: number
    type: string
    title: string
    subtitle: string
    image: string
  }
}
