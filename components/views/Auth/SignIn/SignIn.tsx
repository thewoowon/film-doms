import styled from '@emotion/styled'
import { useForm } from 'react-hook-form'
import { FormError } from '@/components/common/FormError'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

export type LoginFormType = {
  username: string
  password: string
}
function SignIn() {
  const router = useRouter()
  //const queryClient = useQueryClient()
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormType>({
    mode: 'onChange',
  })

  const { mutate: signIn } = useMutation<unknown, unknown, LoginFormType, any>(
    item =>
      fetch(`/api/v1/account/login`, {
        method: 'POST',
        body: JSON.stringify({ item }),
      })
        .then(res => res.json())
        .then(data => data.items),
    {
      onSuccess: () => {
        //queryClient.invalidateQueries('account')
        toast('로그인 되었습니다.', {
          icon: '👏',
          position: 'top-center',
        })
        router.push('/')
      },
      onError: () => {
        toast.error('로그인에 실패했습니다.', {
          icon: '😥',
          position: 'top-center',
        })
      },
    }
  )

  const onSubmit = async () => {
    try {
      const { username, password } = getValues()
      signIn({ username, password })
    } catch (err) {}
  }
  return (
    <Container>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <InputLabel>이메일</InputLabel>
        <LoginInput
          {...register('username', {
            required: '유저명을 입력하세요',
            pattern: /^[a-z0-9_-]{3,16}$/,
          })}
          name="username"
          type="text"
          placeholder="Username"
          required
          autoComplete="true"
        />
        {(errors.username?.type === 'pattern' && (
          <FormError errorMessage="올바른 형식을 입력해주세요" />
        )) ||
          (errors.username?.message && (
            <FormError errorMessage={errors.username?.message} />
          ))}
        <InputLabel>비밀번호</InputLabel>
        <LoginInput
          {...register('password', {
            required: '비밀번호를 입력해주세요',
            pattern:
              /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,14}$/,
          })}
          name="password"
          type="password"
          required
          placeholder="Password"
          autoComplete="true"
        />
        {errors.password?.type === 'pattern' && (
          <FormError errorMessage="대소문자, 숫자, 특수문자 8-14자리를 입력해주세요" />
        )}
        {errors.password?.message && (
          <FormError errorMessage={errors.password?.message} />
        )}
        <LoginButton color="black" onSubmit={handleSubmit(onSubmit)}>
          이메일 로그인
        </LoginButton>
      </LoginForm>
      <LoginButton color="#3482F6" onClick={() => {}}>
        Google 로그인
      </LoginButton>
      <UnderLinkContiner>
        아직 회원이 아니신가요?
        <UnderLink href="/auth/signup">회원가입하기</UnderLink>
      </UnderLinkContiner>
    </Container>
  )
}

export default SignIn

const LoginButton = styled.button<{ color: string }>`
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: 380px;
  color: ${props => props.color};
  border: 2px solid ${props => props.color};
  margin-top: 0.5rem;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: ${props => props.color};
    color: white;
  }
`

const LoginForm = styled.form`
  display: grid;
  gap: 0.5rem;
  margin-top: 1rem;
  width: 380px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`
const LoginInput = styled.input`
  width: 100%;
  height: 52px;
  border-radius: 0.25rem;
  border: 1px solid #d8d4d4;
  padding: 0 1rem;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);
`
const UnderLinkContiner = styled.div`
  display: flex;
  width: 380px;
  padding: 1rem 0;
`
const UnderLink = styled.a`
  color: #3482f6;
  margin: 0 0.5rem;
  &:hover {
    border-bottom: 1px solid #3482f6;
  }
`

const InputLabel = styled.div`
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 0;
`
