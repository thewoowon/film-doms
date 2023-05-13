interface Props {
  width?: string
  height?: string
  fill?: string
}

const I = ({ width = '129', height = '129', fill = '#E96437' }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M129.82 34.4848V0H108.282H22.1282H0.589844V34.4848H22.1282V94.8333H0.589844V129.318H22.1282H108.282H129.82V94.8333H108.282V34.4848H129.82Z"
        fill={fill}
      />
    </svg>
  )
}

export default I
