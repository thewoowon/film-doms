interface Props {
  width?: string
  height?: string
  fill?: string
}

const D = ({ width = '129', height = '129', fill = '#A0B8FF' }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M62.691 0.405273H57.4356H0V129.723H38.769H48.8203H62.691C99.3851 129.723 129.23 100.72 129.23 65.0643C129.23 29.4084 99.3779 0.405273 62.691 0.405273ZM52.41 86.6173V43.5113H66.7689V86.6173H52.41Z"
        fill={fill}
      />
    </svg>
  )
}

export default D
