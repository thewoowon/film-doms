import * as banner from './banner'
import * as article from './article'
import * as myPage from './myPage'

export const handlers = [
  ...Object.values(banner),
  ...Object.values(article),
  ...Object.values(myPage),
]
