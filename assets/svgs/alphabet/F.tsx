interface Props {
  width?: string
  height?: string
  fill?: string
}

const F = ({ width = '129', height = '129', fill = '#F7F7F5' }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M129.23 34.4848V0H71.7945H0V34.4848V57.4747V91.9595V129.318H71.7945V91.9595H114.871V57.4747H71.7945V34.4848H129.23Z"
        fill={fill}
      />
    </svg>
  )
}

export default F
