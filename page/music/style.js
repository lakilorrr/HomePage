import styled from 'styled-components'

export const MusicWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    .toplist-container {
        width: 22.222%;

        .list-title {
            position: sticky;
            top: 80px;
            width: 325px;
            height: 50px;
            line-height: 50px;
            margin: 0;
            z-index: 1;
            background-color: #fff;
        }
        .song-table-fixed {
            position: sticky;
            top: 50px;
        }
        .song-table {
            position: absolute;
        }
    }
    .result-container {
        width: 77.777%;
        .list-header {
            height: 50px;
            line-height: 50px;
            color: #999;
            padding-left: 46px;
            padding-right: 95px;
            font-size: 14px;
            display: flex;
            position: sticky;
            top: 80px;
            background-color: #fff;
            z-index: 1;
        }
    }
    .header-songName,
    .resultItem .song-name-box {
        width: 54%;
    }
    .header-singers,
    .header-album,
    .song-singers,
    .album {
        width: 20%;
        padding-left: 15px;
    }
    .header-duration,
    .song-dt {
        position: absolute;
        top: 0;
        right: 38px;
        width: 50px;
    }
    .resultItem {
        display: flex;
        position: relative;
        padding-left: 46px;
        padding-right: 95px;
        font-size: 14px;
        height: 50px;
        line-height: 50px;
        cursor: pointer;
        transition: background-color 250ms ease-out;
        :hover {
            background-color: #edf1ffc8;
        }
        .song-name-box {
            display: flex;
        }
        .song-name {
            margin-right: 8px;
        }
    }
    .song-alia {
        color: #999;
        font-size: 12px;
    }
    .no-result {
        color: #999;
        text-align: center;
    }
    .play-control-box {
        bottom: 40px;
        position: fixed;
        left: 40px;
        display: flex;
        align-items: center;
        .play-control {
            width: 38px;
            height: 38px;
            padding: 0;
            &.musicIcon {
                font-size: 20px;
                :hover {
                    font-size: 24px;
                }
            }
        }
        .audio-bar {
            height: 38px;
            transition: all 0.3s ease-out;
            max-width: 0px;
            &.show {
                max-width: 300px;
            }
        }
    }
`
