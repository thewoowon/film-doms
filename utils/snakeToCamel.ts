const snakeToCamel = (snake: string) =>
  snake
    .toLowerCase()
    .split('_')
    .reduce(
      (acc, cur, idx) =>
        idx === 0 ? acc + cur : acc + cur[0].toUpperCase() + cur.slice(1),
      ''
    )

export default snakeToCamel
