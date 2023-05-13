interface Props {
  width?: string
  height?: string
  fill?: string
}

const BigL = ({ width = '460', height = '460', fill = '#FFEB74' }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M255.382 255.556V0H0V255.556V460H255.382H459.687V255.556H255.382Z"
        fill={fill}
      />
    </svg>
  )
}

export default BigL
