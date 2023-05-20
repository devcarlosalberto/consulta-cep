import styled from "styled-components"

export const Container = styled.button`
    width: 100%;

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.8rem;

    padding: 0.8rem 1.2rem;

    font-size: 1.8rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;

    border: 2px solid ${({ theme }) => theme.COLORS.BUTTON_BACKGROUND};
    /* background-color: ${({ theme }) => theme.COLORS.BUTTON_BACKGROUND}; */
    background-color: transparent;
    cursor: pointer;

    overflow: hidden;

    &::before {
        content: "";

        position: absolute;
        z-index: -1;

        width: 100%;
        height: 100%;

        opacity: 1;
        transform: translateX(-100%);
        transition: 0.3s;

        background-color: ${({ theme }) => theme.COLORS.BUTTON_BACKGROUND};
    }

    &:hover::before {
        opacity: 1;
        transform: translate(0);
    }
`
