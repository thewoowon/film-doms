interface Props {
  width?: string
  height?: string
  fill?: string
}

const BigI = ({ width = '460', height = '460', fill = '#E96437' }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M459.687 122.667V0H383.073H76.6145H0V122.667H76.6145V337.333H0V460H76.6145H383.073H459.687V337.333H383.073V122.667H459.687Z"
        fill={fill}
      />
    </svg>
  )
}

export default BigI
