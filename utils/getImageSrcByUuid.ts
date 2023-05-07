import { getDomain } from '@/services/api'

const getImageSrcByUuid = (uuid: string) => {
  return `${getDomain('server')}/image/${uuid}`
}

export default getImageSrcByUuid
