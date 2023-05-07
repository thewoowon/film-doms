import { useRecoilState } from 'recoil'
import { useCallback, useState } from 'react'
import { modalState } from '@/states'

type OpenModalType = {
  title: string
  content: JSX.Element | string
  callback?: () => any
}

export const useModal = () => {
  const [modalDataState, setModalDataState] = useRecoilState(modalState)
  const [animation, setAnimation] = useState<'open-modal' | 'close-modal'>(
    'open-modal'
  )

  const closeModal = useCallback(() => {
    setAnimation('close-modal')
    setTimeout(() => {
      setModalDataState(prev => {
        return { ...prev, isOpen: false }
      })
      setAnimation('open-modal')
    }, 270)
  }, [setModalDataState])

  const openModal = useCallback(
    ({ title, content, callback }: OpenModalType) => {
      setModalDataState({
        isOpen: true,
        title: title,
        content: content,
        callBack: callback,
      })
    },
    [setModalDataState]
  )

  return { animation, modalDataState, closeModal, openModal }
}
