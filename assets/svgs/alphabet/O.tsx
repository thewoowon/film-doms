interface Props {
  width?: string
  height?: string
  fill?: string
}

const O = ({ width = '129', height = '129', fill = '#F7F7F5' }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.589844 0.6875V130.006H129.82V0.6875H0.589844ZM73.1023 87.618H58.7434V44.512H73.1023V87.618Z"
        fill={fill}
      />
    </svg>
  )
}

export default O
