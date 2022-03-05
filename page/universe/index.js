import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getImgAction } from './store/actionCreators'
import { UniWrapper } from './style'
export default memo(function Universe() {
    const state = useSelector(
        state => ({
            nasaAPI: state.getIn(['universe', 'nasaAPI'])
        }),
        shallowEqual
    )
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getImgAction())
    }, [dispatch])
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [state.nasaAPI.data])
    const nasaAPI = state.nasaAPI.data || []
    const [currentIdx, setCurrentIdx] = useState(6)
    const [postHover, setPostHover] = useState(false)
    const clickPrev = () => {
        setCurrentIdx(currentIdx + 1)
        if (currentIdx === 6) setCurrentIdx(0)
    }
    const clickNext = () => {
        setCurrentIdx(currentIdx - 1)
        if (currentIdx === 0) setCurrentIdx(6)
    }
    const hoverEnter = () => {
        setPostHover(true)
    }
    const hoverLeave = () => {
        setPostHover(false)
    }
    return (
        <UniWrapper>
            <div className='container'>
                <div className='exp-item'>
                    <div className='c-inner'>
                        <div className='slider'>
                            <div className='slick-track'>
                                <button className='slider-arrow prev navbarIcon icon-houtui' onClick={e => clickPrev()}></button>
                                <button className='slider-arrow next navbarIcon icon-qianjin' onClick={e => clickNext()}></button>
                                <div className='content-box'>
                                    {nasaAPI[currentIdx]?.media_type === 'image' ? (
                                        <img className='slider-img' loading='lazy' src={nasaAPI[currentIdx]?.url} alt='' />
                                    ) : (
                                        <iframe
                                            className='slider-img'
                                            seamless
                                            frameborder='0'
                                            src={nasaAPI[currentIdx]?.url}
                                            title={nasaAPI[currentIdx]?.title}></iframe>
                                    )}
                                    <div className='post-content' onMouseLeave={e => hoverLeave()}>
                                        <div className='post-title' onMouseEnter={e => hoverEnter()}>
                                            {nasaAPI[currentIdx]?.title}
                                            <div className='post-date'>{nasaAPI[currentIdx]?.date}</div>
                                        </div>
                                        <div className={`post-exp ${postHover ? 'visible' : ''}`}>{nasaAPI[currentIdx]?.explanation}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UniWrapper>
    )
})
