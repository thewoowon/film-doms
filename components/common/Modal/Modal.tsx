import { useModal } from '@/hooks/useModal'
import styled from '@emotion/styled'
import { useEffect } from 'react'

const Modal = () => {
  const { animation, modalDataState, closeModal } = useModal()
  useEffect(() => {
    if (modalDataState.isOpen) {
      document.body.style.top = `-${window.pageYOffset}px`
      document.body.style.position = 'fixed'
      document.body.style.overflow = 'hidden'
      document.body.style.width = '100%'
    }
    return () => {
      const heightScroll = parseInt(document.body.style.top || '0', 10) * -1
      document.body.style.removeProperty('position')
      document.body.style.removeProperty('overflow')
      document.body.style.removeProperty('width')
      document.body.style.removeProperty('top')
      window.scrollTo(0, heightScroll)
    }
  }, [modalDataState.isOpen])
  return (
    <>
      {modalDataState.isOpen && (
        <ModalDimmer>
          <ModalBody className={animation}>
            <ModalHeader>
              <ModalTitle>{modalDataState.title}</ModalTitle>
              <ModalCloseButton onClick={() => closeModal()}>
                X
              </ModalCloseButton>
            </ModalHeader>
            <ModalContents>{modalDataState.content}</ModalContents>
          </ModalBody>
        </ModalDimmer>
      )}
    </>
  )
}

export default Modal

const ModalDimmer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`
const ModalBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 600px;
  background-color: #ffffff;
  border: 1px solid #cbcbcb;
  border-radius: 10px;
`
const ModalTitle = styled.div`
  padding: 1rem;
  font-weight: bold;
  font-size: large;
  border-bottom: 1px solid #cbcbcb;
`
const ModalContents = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #cbcbcb;
`
const ModalHeader = styled.div`
  position: relative;
`
const ModalCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 52px;
  height: 52px;
  background: none;
  border: none;
  font-weight: bold;
  :hover {
    opacity: 50%;
    transition: 0.5s;
  }
`
