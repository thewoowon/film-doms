import { type UseMutationOptions, useMutation } from '@tanstack/react-query'
import { createSignUpAccount, getCheckEmailDuplicate } from './apis'

export const useCreateSignUpAccount = (
  options?: UseMutationOptions<
    Awaited<ReturnType<typeof createSignUpAccount>>,
    unknown,
    Parameters<typeof createSignUpAccount>[0]
  >
) => {
  return useMutation(createSignUpAccount, options)
}

export const useFetchCheckEmailDuplicate = () => {
  return useMutation(getCheckEmailDuplicate)
}
