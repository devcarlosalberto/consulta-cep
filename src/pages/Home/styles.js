import styled from "styled-components"

export const Container = styled.div`
    padding: 4.8rem;

    width: 100%;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Search = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
`

export const Title = styled.h1`
    font-size: 3.6rem;
    font-weight: 500;
`

export const TextError = styled.span`
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.TEXT_ERROR};
    letter-spacing: 0.1rem;
`
