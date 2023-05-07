interface Props {
  width?: string
  height?: string
  fill?: string
}

const ProfileEdit = ({
  width = '32',
  height = '32',
  fill = 'white',
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="#FF5414" />
      <path
        d="M21.9801 8C21.7646 8 21.5489 8.08208 21.3847 8.24671L19.9472 9.68421L23.3156 13.0526L24.7531 11.6151C25.0823 11.2859 25.0823 10.7528 24.7531 10.4243L22.5755 8.24671C22.4108 8.08208 22.1955 8 21.9801 8ZM18.6841 10.9474L9 20.6316V24H12.3684L22.0524 14.3158L18.6841 10.9474Z"
        fill={fill}
      />
    </svg>
  )
}

export default ProfileEdit
