import styled from '@emotion/styled'
import { useForm } from 'react-hook-form'
import { FormError } from '@/components/common/FormError'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import { EMAIL_REGEX, PASSWORD_REGEX } from '@/constants/auth/regex'
import { google } from '@/assets/images/common'
import Image from 'next/image'

export type LoginFormType = {
  email: string
  password: string
}
function SignIn({ closeModal }: { closeModal: () => void }) {
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
      const { email, password } = getValues()
      signIn({ email, password })
    } catch (err) {}
  }
  return (
    <Container>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <LoginInput
          {...register('email', {
            required: '이메일을 입력하세요',
            pattern: EMAIL_REGEX,
          })}
          name="username"
          type="text"
          placeholder="이메일"
          required
          autoComplete="true"
        />
        {(errors.email?.type === 'pattern' && (
          <FormError errorMessage="올바른 형식을 입력해주세요" />
        )) ||
          (errors.email?.message && (
            <FormError errorMessage={errors.email?.message} />
          ))}
        <LoginInput
          {...register('password', {
            required: '비밀번호를 입력해주세요',
            pattern: PASSWORD_REGEX,
          })}
          name="password"
          type="password"
          required
          placeholder="비밀번호"
          autoComplete="true"
        />
        {errors.password?.type === 'pattern' && (
          <FormError errorMessage="대소문자, 숫자, 특수문자 8-14자리를 입력해주세요" />
        )}
        {errors.password?.message && (
          <FormError errorMessage={errors.password?.message} />
        )}
        <LoginOptionContainer>
          <LoginStatusContainer>
            <LoginStatusCheck type={'checkbox'} />
            <LoginStatusText>로그인 상태유지</LoginStatusText>
          </LoginStatusContainer>
          <PasswordLink>비밀번호 찾기</PasswordLink>
        </LoginOptionContainer>

        <LoginButton onSubmit={handleSubmit(onSubmit)}>로그인</LoginButton>
      </LoginForm>
      <LineButton color="#222222" onClick={() => {}}>
        <Image src={google} width="24" height="24" alt="" />
        구글로 로그인
      </LineButton>
      <SignUpText>
        아직 필름덤즈 회원이 아니신가요?
        <span
          onClick={() => {
            closeModal()
            router.push('/auth/signup')
          }}
        >
          회원가입
        </span>
      </SignUpText>
    </Container>
  )
}

export default SignIn

const LoginButton = styled.button`
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: 100%;
  height: 50px;
  background-color: #ff5414;
  color: #f7f7f5;
  margin-top: 32px;
`

const LineButton = styled.button<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: 100%;
  height: 50px;
  border: 2px solid #f7f7f5;
  &:hover {
    background-color: ${props => props.color};
    color: white;
  }
  color: #f7f7f5;
  gap: 8px;
`

const LoginOptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LoginStatusContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

const LoginStatusText = styled.div`
  color: #f7f7f5;
`

const LoginStatusCheck = styled.input`
  appearance: none;
  color: #f7f7f5;
  background: transparent;
  border: 2px solid #f7f7f5;
  width: 18px;
  height: 18px;
  &:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 150% 150%;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`

const PasswordLink = styled.a`
  color: #f7f7f5;
  cursor: pointer;
`

const LoginForm = styled.form`
  display: grid;
  gap: 16px;
  margin-top: 1rem;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`
const LoginInput = styled.input`
  width: 100%;
  height: 48px;
  border: 2px solid #f7f7f5;
  padding: 0 1rem;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);
  background-color: transparent;
  color: #f7f7f5;
  &::placeholder {
    color: #f7f7f5;
  }
`

const SignUpText = styled.p`
  color: #f7f7f5;
  & > span {
    color: #ff5414;
    margin-left: 8px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`
