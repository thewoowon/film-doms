import styled from '@emotion/styled'

interface IFormErrorProps {
  errorMessage?: string
}

const FormError = ({ errorMessage }: IFormErrorProps) => {
  return (
    <Container role={'alert'} className="mx-4 text-xs text-red-400">
      {errorMessage}
    </Container>
  )
}

export default FormError

const Container = styled.span`
  margin: 0 4px;
  font-size: 12px;
  color: #ff6699;
`
