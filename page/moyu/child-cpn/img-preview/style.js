import styled from 'styled-components'

export const PreviewWrapper = styled.div`
    display: ${props => {
        if (props.show) return 'block'
        if (props.cancel) return 'none'
    }};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: rgba(0, 0, 0, 0.85);
    text-align: center;
    z-index: 2;
    .exit {
        position: absolute;
        right: 50px;
        top: 50px;
        cursor: pointer;
        color: white;
    }
    .wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
    .splash {
        max-height: 100%;
        filter: brightness(0%);
        transition: filter 0.2s ease-out;
        cursor: pointer;
        &.show {
            filter: brightness(100%);
        }
    }
    .burst {
        transform: scale(1.6);
        max-height: 300px;
    }
`
