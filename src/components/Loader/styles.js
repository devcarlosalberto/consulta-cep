import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100dvh;

    background: ${({ theme }) => theme.COLORS.LOADER};
    backdrop-filter: blur(20px);

    position: absolute;
    z-index: 1;
`

export const LoaderAnimation = styled.div`
    width: 10rem;
    height: 10rem;

    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);

    border: 0.4rem solid
        ${({ theme }) => theme.COLORS.LOADER_ANIMATE_BACKGROUND};
    border-top: 0.4rem solid ${({ theme }) => theme.COLORS.LOADER_ANIMATE};
    border-radius: 50%;

    animation: spin 1.5s infinite linear;

    @keyframes spin {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }

        100% {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
`
