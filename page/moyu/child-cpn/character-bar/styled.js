import styled from 'styled-components'

export const CharacterInfo = styled.div`
    display: flex;
    margin-top: 20px;
    align-items: center;
    .character-img .icon-img {
        width: 85px;
        height: 85px;
        margin-right: 20px;
        overflow: hidden;
        border-radius: 10px;
        position: relative;
        cursor: pointer;
        transition: ease-in-out 0.3s;
        &:hover {
            width: 120px;
            height: 120px;
        }
    }
    .card-img {
        max-height: 0;
        max-width: 0;
        visibility: hidden;
        overflow: hidden;
        transition: transform ease-in-out 0.5s;
        &.card-show {
            position: absolute;
            transform: translateX(-110%);
            max-height: 260px;
            max-width: 140px;
            visibility: visible;
            transition: transform ease-in-out 0.5s;
        }
    }

    .character-detail {
        border: 1px solid #f0f2f5;
        border-radius: 10px;
        padding: 24px 30px;
        flex-grow: 1;
        .charater-name {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 10px;
        }
        .character-dpt {
            font-size: 16px;
        }
    }
    .button {
        color: #65676b;
        border: 1px solid #ced0d4;
        border-radius: 6px;
        padding: 0 16px;
        background-color: transparent;
        font-size: 16px;
        margin-right: 10px;
        margin-bottom: 10px;
        line-height: 35px;
        transition: all 0.3s ease;
        :hover {
            background-color: #edf1ffc8;
            border-color: transparent;
        }
    }
    .bottom-bar {
        position: relative;
        top: 20px;
        display: flex;
        justify-content: space-between;
        .boss {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .boss-name {
                line-height: 35px;
                border: transparent;
            }
            .boss-img {
                width: 35px;
                height: 35px;
            }
        }
        .preview {
            display: flex;
        }
        .burst,
        .chouka {
            cursor: pointer;
        }
    }
`
