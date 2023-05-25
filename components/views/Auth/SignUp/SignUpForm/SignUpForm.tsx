import { type InputHTMLAttributes, type CSSProperties, useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { Divider, RenderIf } from '@/components/common'
import { EMAIL_REGEX } from '@/constants/auth/regex'
import {
  useCreateSignUpAccount,
  useFetchCheckEmailDuplicate,
} from '@/services/auth'
import styled from '@emotion/styled'
import { colors, flex, flexCenter, font } from '@/styles/emotion'
import { INPUT_WIDTH } from './style'

type CreateUserFormType = {
  username: string
  email: string
  password: string
  passwordAgain: string
  agreeCheckbox: string
  hashtag: string[]
}

const FLAG = true

const SignUpForm = () => {
  const router = useRouter()
  const [emailVerification, setEmailVerification] = useState(false)
  const [value, setValue] = useState<string>('')
  const [hashtags, setHashtags] = useState<string[]>([])
  const { mutate: checkEmailDuplicate } = useFetchCheckEmailDuplicate()
  const { mutate: addUser } = useCreateSignUpAccount({
    onError: () => {
      toast.error('회원가입에 실패했습니다.')
    },
    onSuccess: () => {
      toast.success('회원가입이 완료되었습니다.', {
        icon: '👏',
        position: 'top-right',
      })
      router.push('/auth/signin')
    },
  })

  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<CreateUserFormType>({
    mode: 'onChange',
  })

  const onSubmit = async () => {
    const { username, email, password, passwordAgain, agreeCheckbox } =
      getValues()

    if (!agreeCheckbox) {
      alert('약관에 동의해주세요.')
      return
    }

    if (!emailVerification) {
      alert('이메일 인증을 완료해주세요.')
      return
    }

    if (password !== passwordAgain) {
      alert('비밀번호가 일치하지 않습니다.')
      return
    }

    addUser({
      nickname: username,
      email: email,
      password: password,
      favoriteMovies: [],
    })
  }

  const handleEmailVerification = async () => {
    const { email } = getValues()

    checkEmailDuplicate(
      { email },
      {
        onSuccess: response => {
          if (response) {
            alert('이미 가입된 이메일입니다.')
            return
          }

          setEmailVerification(true)
          toast.success('이메일 인증이 완료되었습니다.', {
            icon: '👏',
            position: 'top-right',
          })
        },
      }
    )
  }

  const handleRemoveHashtag = (hashtagToRemove: string) => {
    setHashtags(hashtags =>
      hashtags.filter(hashtag => hashtag !== hashtagToRemove)
    )
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.stopPropagation()
    if (event.key === 'Enter' && value !== '') {
      if (!hashtags.find(hashtag => hashtag === value)) {
        setHashtags(hashtags => [...hashtags, value])
        setValue('')
      }
    }
  }

  return (
    <Form>
      <Box>
        <Divider color={colors.primary.orange} />
        <Group>
          <InputBox>
            <Label required>이메일</Label>
            <Input
              {...register('email', {
                required: true,
                pattern: {
                  value: EMAIL_REGEX,
                  message: '올바른 이메일 형식이 아니에요!',
                },
              })}
              type="email"
              name="email"
              placeholder="인증메일이 발송되니 이메일 주소를 정확하게 기입해주세요."
              required
            />
            <OptionBox>
              <Button>이메일발송</Button>
            </OptionBox>
          </InputBox>
          <RenderIf
            condition={errors.email?.type === 'pattern'}
            render={
              <Flex>
                <Empty />
                <ErrorText>{errors.email?.message}</ErrorText>
              </Flex>
            }
          />
        </Group>
        <Divider color={colors.grey[100]} size={1} />
        <Group>
          <InputBox>
            <Label />
            <Input width="sm" type="password" name="emailAuthCode" required />
            <Button>인증번호 확인</Button>
          </InputBox>
        </Group>
        <Divider color={colors.grey[100]} size={1} />
        <Group>
          <InputBox>
            <Label required>비밀번호</Label>
            <Input
              type="password"
              name="password"
              placeholder="비밀번호는 영문과 숫자를 포함해 8자리 이상으로 기입해주세요."
              required
            />
          </InputBox>
        </Group>
        <Divider color={colors.grey[100]} size={1} />
        <Group>
          <InputBox>
            <Label required>비밀번호확인</Label>
            <Input type="password" name="passwordCheck" required />
          </InputBox>
          <RenderIf
            condition={FLAG}
            render={
              <Flex>
                <Empty />
                <ErrorText>두개의 비밀번호가 서로 달라요.</ErrorText>
              </Flex>
            }
          />
        </Group>
        <Divider color={colors.grey[100]} size={1} />
        <Group>
          <InputBox>
            <Label required>닉네임</Label>
            <Input
              type="text"
              name="nickname"
              placeholder="닉네임은 2자 이상으로 입력하세요."
              pattern="[가-힣a-zA-Z]"
              minLength={2}
              maxLength={10}
              required
            />
            <OptionBox>
              <Button>중복확인</Button>
            </OptionBox>
          </InputBox>
          <RenderIf
            condition={FLAG}
            render={
              <Flex>
                <Empty />
                <ErrorText>이미 존재하는 닉네임이에요.</ErrorText>
              </Flex>
            }
          />
        </Group>
        <Divider color={colors.grey[100]} size={1} />
        <Group>
          <InputBox>
            <Label>관심영화</Label>
            <Input
              type="text"
              name="interestMovie"
              placeholder="좋아하는 영화 제목 최대 5가지를 기입해주세요."
            />
          </InputBox>
          <RenderIf
            condition={FLAG}
            render={
              <Flex>
                <Empty />
                <ErrorText>관심영화의 수가 너무 많습니다.</ErrorText>
              </Flex>
            }
          />
        </Group>
        <Divider color={colors.grey[100]} size={1} />
        <Group>
          <InputBox>
            <Label required>이용약관</Label>
            <Flex gap={'10px'}>
              <Input type="checkbox" name="termsOfService" required />
              <Text>
                Film Dom&#39;s 이용을 위한 개인정보 제공 및 수집에 동의합니다.
              </Text>
            </Flex>
            <OptionBox>
              <MoreButton>자세히</MoreButton>
            </OptionBox>
          </InputBox>
        </Group>
      </Box>
      <SignUpButton>가입하기</SignUpButton>
    </Form>
  )
}

const Empty = styled.div`
  width: 160px;
  height: 10px;
`

const Flex = styled.div<{ gap?: CSSProperties['gap'] }>`
  display: flex;
  gap: ${({ gap }) => gap};
`

const SignUpButton = styled.button`
  ${font({ size: '24px', weight: '600' })}
  width: 480px;
  height: fit-content;
  padding: 16px 0;
  color: ${colors.primary.white};
  background-color: ${colors.primary.orange};
`

const MoreButton = styled.button`
  color: #ff9a7c;
  text-decoration: underline;
`

const Text = styled.span`
  ${font({ weight: '600' })}
`

const ErrorText = styled.span`
  ${font({})}
  color: ${colors.primary.orange};
`

const Button = styled.button`
  width: 120px;
  height: 50px;
  border: 1px solid ${colors.primary.orange};
  color: ${colors.primary.orange};
`

const OptionBox = styled.div`
  ${flexCenter}
  margin-left: auto;
`

const Input = styled.input<{
  type: InputHTMLAttributes<HTMLInputElement>['type']
  width?: 'sm' | 'md' | 'lg'
}>`
  ${({ width = 'md' }) => `width: ${INPUT_WIDTH[width]}`}

  ${({ type }) => {
    if (type === 'checkbox') {
      return `
        flex: 0;
      `
    }
  }}
`

const Label = styled.label<{ required?: boolean }>`
  ${flex({ align: 'center' })}
  width: 160px;
  ${({ required }) =>
    required &&
    `
      ::after {
        content: '*';
        color: ${colors.primary.orange};
      }
    `}
`

const InputBox = styled.div`
  width: 100%;
  ${flex({ align: 'center' })}
`

const Group = styled.div`
  ${flex({ direction: 'column', justify: 'center' })}
  gap: 1rem;
  min-height: 80px;
  padding: 16px 0;
`

const Box = styled.div`
  width: 100%;
`

const Form = styled.form`
  ${flex({ direction: 'column', align: 'center' })}
  width: 100%;
  gap: 112px;
`

export default SignUpForm
