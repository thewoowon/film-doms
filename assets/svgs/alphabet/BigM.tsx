interface Props {
  width?: string
  height?: string
  fill?: string
}

const BigM = ({ width = '460', height = '460', fill = '#E75B4E' }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M310.416 0L231.299 102.503L150.088 0H0V460H102.153H102.868V306.513L153.765 460H306.611L357.509 306.513V460H357.534H459.687V0H310.416Z"
        fill={fill}
      />
    </svg>
  )
}

export default BigM
