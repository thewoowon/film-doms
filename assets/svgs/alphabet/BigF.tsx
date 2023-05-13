interface Props {
  width?: string
  height?: string
  fill?: string
}

const BigF = ({ width = '460', height = '460', fill = '#F7F7F5' }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M460 122.667V0H255.556H0V122.667V204.444V327.111V460H255.556V327.111H408.889V204.444H255.556V122.667H460Z"
        fill={fill}
      />
    </svg>
  )
}

export default BigF
