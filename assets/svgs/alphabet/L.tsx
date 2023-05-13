interface Props {
  width?: string
  height?: string
  fill?: string
}

const L = ({ width = '129', height = '129', fill = '#FFEB74' }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M71.9703 71.8434V0H0.175781V71.8434V129.318H71.9703H129.406V71.8434H71.9703Z"
        fill={fill}
      />
    </svg>
  )
}

export default L
