import styled from 'styled-components'

export const SentenceWrapper = styled.div`
    margin: 15px 0px;
    line-height: 24px;
    .sentence {
        line-height: 175%;
        font-size: 16px;
        .highlight {
            position: relative;
            ::after {
                content: '';
                position: absolute;
                display: inline-block;
                width: 100%;
                height: 12px;
                background-color: rgba(255, 217, 82, 0.4);
                left: 0;
                bottom: -2px;
                z-index: -1;
            }
        }
    }
    .bottom-bar {
        display: flex;
        color: #bbbbbb;
        font-size: 14px;
        font-style: italic;
        .time {
        }
        .copyright {
            flex: 1;
            margin-left: 10px;
            display: flex;
            justify-content: space-between;
        }
    }
`
