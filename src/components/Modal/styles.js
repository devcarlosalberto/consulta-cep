import styled from "styled-components"

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100dvh;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: 0.5s;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    position: relative;

    padding: 2.4rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MODAL};

    animation: fadeUp 0.3s ease-in-out;

    h3 {
        font-size: 2.8rem;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 0.1rem;

        padding-bottom: 0.8rem;
        margin-bottom: 1.8rem;

        border-bottom: 1px solid ${({ theme }) => theme.COLORS.INPUT_BORDER};
    }

    > svg {
        position: absolute;
        right: 2.4rem;
        top: 2.8rem;

        font-size: 2.4rem;

        cursor: pointer;

        transition: 0.5s;
    }

    > svg:hover {
        transform: rotate(90deg);
        filter: brightness(0.5);
    }

    @keyframes fadeUp {
        0% {
            opacity: 0;
            transform: translateY(-40%);
        }

        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`
