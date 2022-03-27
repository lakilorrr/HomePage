import styled from 'styled-components'

export const SongItemWrapper = styled.div`
    line-height: 50px;
    display: flex;
    font-size: 14px;
    align-items: baseline;

    .rank {
        width: 15%;
    }
    .song-info {
        display: flex;
        width: 90%;
        justify-content: space-between;
        align-items: baseline;
        .song-name-box {
            height: 20px;
            display: flex;
            align-items: baseline;
            .musicIcon {
                margin-right: 5px;
                line-height: 20px;
                font-size: 14px;
                cursor: pointer;
            }
            .song-name {
                line-height: 20px;
                width: 150px;
            }
        }
        .song-singers {
            width: 80px;
        }
    }
`
