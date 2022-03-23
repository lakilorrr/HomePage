import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    padding: 0 90px;
    background: #fff;
    position: sticky;
    top: 0;
    z-index: 1;
    display: block;
    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`
export const NavBar = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    .bar-wrap {
        display: block;
        .bar-main {
            display: flex;
            padding: 0;
            justify-content: center;
            flex-wrap: wrap;
        }
        .bar-item {
            margin: 0 12px;
            position: relative;

            .navbarIcon {
                line-height: 80px;
                font-size: 20px;
                margin-right: 10px;
            }
            .item-link {
                height: 80px;
                line-height: 80px;
                position: relative;
                font-size: 16px;
                transition: border-bottom linear 0.1s;
                &.active {
                    border-bottom: 2px solid #655dd1;
                }
            }
        }
    }
`

export const SearchBar = styled.div`
    display: block;
    flex: 0 0 25%;
    max-width: 25%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    .search-wrap {
        display: flex;
        text-align: right;
        align-items: center;
        justify-content: flex-end;
        .input-wrap {
            position: relative;
            margin-bottom: 0;
            text-align: right;
            display: flex;
            align-items: center;
            .search-input {
                min-width: 143px;
                height: 35px;
                background: #f0f2f5;
                border-radius: 44px;
                padding-left: 46px;
                color: #65676b;
                max-width: 245px;
                font-size: 14px;
                padding: 0 20px;
                border: 1px solid transparent;
                :focus {
                    border-color: #4961da89;
                }
            }
            .switch {
                margin-left: 5px;
                margin-top: 0;
                margin-bottom: 0;
                display: inline-block;
                .switch-bnt {
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                    font-size: 12px;
                    border-radius: 100%;
                    background: #f0f2f5;
                    text-align: center;
                }
            }
        }
    }
`
