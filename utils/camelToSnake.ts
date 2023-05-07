const camelToSnake = (camel: string) =>
  camel.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)

export default camelToSnake
