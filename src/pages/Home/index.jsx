import { useState } from "react"

import { Container, Search, Title, TextError } from "./styles"
import { Loader } from "../../components/Loader"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Modal } from "../../components/Modal"

import { api } from "../../services/api"

const App = () => {
    const [cep, setCep] = useState("")

    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [neighborhood, setNeighborhood] = useState("")
    const [street, setStreet] = useState("")

    const [showModal, setShowModal] = useState(false)
    const [showError, setShowError] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = () => {
        clearInput()

        if (cep.trim() == "") {
            setShowError(true)
            return
        }

        setShowError(false)
        searchCep()
    }

    const clearInput = () => {
        setCep("")
    }

    const searchCep = async () => {
        setIsLoading(true)
        try {
            const { data } = await api.get(`/${cep}/json`)
            setState(data.uf)
            setCity(data.localidade)
            setNeighborhood(data.bairro)
            setStreet(data.logradouro)
            setIsLoading(false)
            openModal()
        } catch {
            setIsLoading(false)
            setShowError(true)
        }
    }

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    return (
        <Container>
            {isLoading && <Loader />}
            <Search>
                <Title>Consulta CEP</Title>
                <Input
                    placeholder="CEP"
                    type="text"
                    inputMode="numeric"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                />
                <Button title="Consultar" onClick={handleSubmit} />
                {showError && (
                    <TextError>Houve um erro ao consultar este CEP.</TextError>
                )}
            </Search>
            {showModal && (
                <Modal onClose={closeModal}>
                    <h3>Resultado</h3>
                    <span>Estado: {state}</span>
                    <span>Cidade: {city}</span>
                    <span>Bairro: {neighborhood}</span>
                    <span>Logradouro: {street}</span>
                </Modal>
            )}
        </Container>
    )
}

export { App }
