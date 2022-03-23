import React, { memo, useState, useCallback } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeMusicSearch, changeDicQuery } from './store/actionCreators'
import useDebounce from './hook/inputDebounce'
import { NavBarMenu } from '../../local-data/navbar'

import { HeaderWrapper, NavBar, SearchBar } from './style'

export default memo(function HeaderNew() {
    const [searchEng, setSearchEng] = useState(true)
    const [inputContent, setInputContent] = useState('')

    const dispatch = useDispatch()
    const debounceValue = useDebounce(inputContent, 300)
    const navigate = useNavigate()
    const enterSearch = useCallback(
        e => {
            if (e.key === 'Enter') {
                if (searchEng) {
                    dispatch(changeDicQuery(debounceValue))
                    navigate('/dictionary', { replace: true })
                } else {
                    dispatch(changeMusicSearch(debounceValue))
                    navigate('/music', { replace: true })
                }
            }
        },
        [navigate, dispatch, searchEng, debounceValue]
    )

    return (
        <HeaderWrapper>
            <div className='content'>
                <NavBar>
                    <div className='bar-wrap'>
                        <div className='bar-main'>
                            {NavBarMenu.map((item, idx) => {
                                return (
                                    <div className='bar-item' key={item.icon}>
                                        <i className={`navbarIcon ${item.icon}`}></i>
                                        <NavLink to={item.path} className='item-link'>
                                            {item.title}
                                        </NavLink>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </NavBar>
                <SearchBar>
                    <div className='search-wrap'>
                        <div className='input-wrap'>
                            <input
                                type='text'
                                placeholder={`${searchEng ? '查词典...' : '查音乐...'}`}
                                className='search-input'
                                onChange={e => setInputContent(e.target.value)}
                                onKeyPress={enterSearch}
                            />
                            <div className='switch'>
                                <div className='switch-bnt'>
                                    <i
                                        className={`headerIcon ${searchEng ? 'icon-zhishi' : 'icon-yinlebofangliebiao'}`}
                                        onClick={() => setSearchEng(!searchEng)}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </SearchBar>
            </div>
        </HeaderWrapper>
    )
})
