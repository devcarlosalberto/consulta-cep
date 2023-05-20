import { Container } from "./styles"

const Button = ({ title, icon: Icon, ...props }) => {
    return (
        <Container {...props}>
            {title}
            {Icon && <Icon />}
        </Container>
    )
}

export { Button }
