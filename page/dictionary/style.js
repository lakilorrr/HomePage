import styled from 'styled-components'

export const DicWrapper = styled.div`
    position: relative;
    .slider-arrow {
        outline: none;
        width: 50px;
        height: 50px;
        background: transparent;
        border: 1px solid #878787;
        border-radius: 100%;
        cursor: pointer;
        position: fixed;
        bottom: 43px;
        transition: all ease 0.3s;
        :hover {
            background-color: #edf1ffc8;
            border-color: transparent;
        }
        :active {
            background-color: #97989c5c;
            border-color: transparent;
        }
    }
    .prev {
        left: 25px;
        top: calc(50% - 25px);
        pointer-events: ${props => (props.currentRange[0] === 0 ? 'none' : 'auto')};
        border-color: ${props => props.currentRange[0] === 0 && 'transparent'};
    }
    .next {
        right: 25px;
        top: calc(50% - 25px);
        pointer-events: ${props => (props.currentRange[1] === 45 ? 'none' : 'auto')};
        border-color: ${props => props.currentRange[1] === 45 && 'transparent'};
    }
    .navbarIcon {
        font-size: 18px;
    }
    .content-box {
        margin-top: 20px;
        .no-result {
            color: #999;
        }
    }
`
