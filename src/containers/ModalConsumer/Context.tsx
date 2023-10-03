import { createContext, useContext, useState } from 'react'
import { ContexProvider } from '../../types'

export const ModalContext = createContext<ContexProvider>({
    isLoading: false,
    setIsLoading: () => { },
    modalId: '',
    setModalId: () => { },
    textModal: '',
    setTextModal: () => { },
    title: '',
    setTitle: () => { },
    isOpen: false,
    setIsOpen: () => { }
})
// export const ModalProvider = ({ children }: any) => {
//     const [isLoading, setIsLoading] = useState(false)
//     const [modalId, setModalId] = useState('')
//     const [textModal, setTextModal] = useState('')
//     const [title, setTitle] = useState('')
//     const [isOpen, setIsOpen] = useState(false)

//     return (
//         <ModalContext.Provider value={{ isLoading, modalId, textModal, title, isOpen, setIsLoading, setModalId, setTextModal, setTitle, setIsOpen }}>
//             {children}
//         </ModalContext.Provider>
//     )
// }
export const ModalConsumer = () => useContext(ModalContext)