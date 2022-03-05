import styled from 'styled-components'

export const UniWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;

    .slider {
        position: relative;
        display: block;
        .slider-arrow {
            outline: none;
            width: 50px;
            height: 50px;
            background: transparent;
            border: 1px solid #878787;
            border-radius: 100%;
            cursor: pointer;
            position: absolute;
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
            left: -100px;
            top: calc(307px - 25px);
        }
        .next {
            right: -100px;
            top: calc(307px - 25px);
        }
        .navbarIcon {
            font-size: 18px;
        }
    }

    .content-box {
        padding-bottom: 120px;

        .slider-img {
            width: 1230px;
            height: 615px;
            object-fit: cover;
            border-radius: 0 0 10px 10px;
        }
        .post-content {
            position: absolute;
            background: #ffffffed;
            width: 570px;
            border-radius: 10px;
            right: 100px;
            bottom: 50px;
            padding: 20px 58px 20px 42px;

            .post-title {
                margin-bottom: 0;
                font-size: 18px;
                padding-bottom: 80px;
                line-height: 46px;
                display: flex;
                justify-content: space-between;

                .post-date {
                    font-size: 16px;
                }
            }
            .post-exp {
                margin-bottom: 0;
                font-size: 16px;
                transition: visibility ease-in-out 0.5s, max-height ease-in-out 0.5s, margin-top ease-in 0.5s;
                max-height: 0;
                margin-top: -20px;
                visibility: hidden;
                overflow: hidden;
                &.visible {
                    visibility: visible;
                    max-height: 350px;
                    margin-top: -60px;
                }
            }
        }
    }
`
