import { useState } from "react"

import { Container, Content } from "./styles"

import { FiX } from "react-icons/fi"

const Modal = ({ onClose, children }) => {
    const handleCloseModal = () => {
        onClose()
    }

    return (
        <Container>
            <Content>
                <FiX onClick={handleCloseModal} />
                {children}
            </Content>
        </Container>
    )
}

export { Modal }
