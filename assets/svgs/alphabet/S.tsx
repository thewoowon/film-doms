interface Props {
  width?: string
  height?: string
  fill?: string
}

const S = ({ width = '129', height = '129', fill = '#F7F7F5' }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M130 29.4248V0.6875H0.769531V86.8995H72.564V101.268H0.769531V130.006H130V43.7935H58.2051V29.4248H130Z"
        fill={fill}
      />
    </svg>
  )
}

export default S
