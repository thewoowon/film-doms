type Params = {
  [key: string]: unknown
}

const createParams = (params: Params) => {
  const stringifyParams = JSON.parse(JSON.stringify(params))
  const _params = new URLSearchParams(stringifyParams)

  return _params.toString()
}

export default createParams
