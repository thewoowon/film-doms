declare module Auth {
  declare module SignUp {
    type Request = {
      email: string
      password: string
      nickname: string
      favoriteMovies: string[]
    }

    // TODO: 백엔드 DTO 완료 시, 수정
    type DTO = {}

    type CheckEmailDuplicateRequest = {
      email: string
    }

    type CheckEmailDuplicateDTO = boolean
  }
}
