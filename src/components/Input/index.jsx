import { Container } from "./styles"

const Input = ({ error, placeholder, ...props }) => {
    return (
        <Container>
            <input {...props} required />
            <span>{placeholder}</span>
            <i></i>
        </Container>
    )
}

export { Input }
