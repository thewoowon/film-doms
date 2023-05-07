import axios from 'axios'

type DomainType = 'server' | 'msw'

export const getDomain = (type: DomainType) => {
  switch (type) {
    case 'server':
      return 'https://nginx-nginx-4uvg2mlecrl7qe.sel3.cloudtype.app'
    case 'msw':
      return '/'
    default:
      throw new Error('Invalid type')
  }
}

const createApi = (type: DomainType) => {
  const _api = axios.create({
    baseURL: `${getDomain(type)}`,
  })

  _api.interceptors.response.use(response => {
    return response.data
  })

  return _api
}

const api = createApi('server')

export const mswApi = createApi('msw')

export default api
