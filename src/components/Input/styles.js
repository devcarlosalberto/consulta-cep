import styled from "styled-components"

export const Container = styled.div`
    position: relative;
    width: 100%;

    input,
    span {
        font-size: 2.2rem;
        font-weight: 500;
        letter-spacing: 0.08rem;
    }

    input {
        width: 100%;

        padding: 1rem 0 0.5rem;
        color: ${({ theme }) => theme.COLORS.INPUT_TEXT};

        outline: none;
        border: none;
        box-shadow: none;
        background-color: transparent;
    }

    span {
        position: absolute;
        left: 0;
        padding: 1rem 0 0.5rem;

        text-transform: uppercase;
        pointer-events: none;

        color: ${({ theme }) => theme.COLORS.INPUT_FLOAT_LABEL};
        transition: 0.3s;
    }

    input:valid ~ span,
    input:focus ~ span {
        transform: translateY(-2.4rem);
        font-size: 1.2rem;
        color: ${({ theme }) => theme.COLORS.INPUT_FLOAT_LABEL_ACTIVE};
    }

    i {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: #fff;
        overflow: hidden;
    }
`
