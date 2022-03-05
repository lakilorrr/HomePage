import React, { memo, useCallback, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getVolAction } from './store/actionCreators'
import SentenceItem from './child-cpn/sentence-item'
import { DicWrapper } from './style'
import { volCategory } from '../../local-data/vocabulary'

export default memo(function Dictionary() {
    const [category, setCategory] = useState('All')
    const [currentRange, setCurrentRange] = useState([0, 9])

    const state = useSelector(
        state => ({
            vol: state.getIn(['dic', 'vol']),
            dicQuery: state.getIn(['header', 'dicQuery'])
        }),
        shallowEqual
    )
    const dispatch = useDispatch()
    const lowerDicQuery = state.dicQuery.toLowerCase()
    useEffect(() => {
        dispatch(getVolAction(category, lowerDicQuery))
    }, [dispatch, category, lowerDicQuery])
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [state.vol])

    const next = () => {
        const [start, end] = currentRange
        setCurrentRange([start + 9, end + 9])
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    const prev = () => {
        const [start, end] = currentRange
        setCurrentRange([start - 9, end - 9])
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    const handleCategory = useCallback(
        item => {
            setCategory(item.link)
            setCurrentRange([0, 9])
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        },
        [category]
    )
    return (
        <div className='container'>
            <div className='exp-item'>
                <div className='c-inner'>
                    <div className='slick-track'>
                        <DicWrapper currentRange={currentRange}>
                            <button className='slider-arrow prev navbarIcon icon-houtui' onClick={e => prev()}></button>
                            <button className='slider-arrow next navbarIcon icon-qianjin' onClick={e => next()}></button>
                            <div className='tab-bar-title'>{state.dicQuery}</div>
                            <div className='tab-bnt'>
                                {volCategory.map((item, idx) => {
                                    return (
                                        <div
                                            className={`tab-bnt-item ${category === item.link && 'tab-bnt-selected'}`}
                                            key={item.name}
                                            onClick={e => handleCategory(item)}>
                                            <div className='tab-bnt-title'>{item.name}</div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='content-box'>
                                {state.vol.length > 0 ? (
                                    state.vol.slice(currentRange[0], currentRange[1]).map((item, idx) => {
                                        return <SentenceItem info={item} category={category} key={idx} />
                                    })
                                ) : (
                                    <div className='no-result'>糟糕，没有搜索</div>
                                )}
                            </div>
                        </DicWrapper>
                    </div>
                </div>
            </div>
        </div>
    )
})
