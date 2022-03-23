import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getSplashExit, getSplash, getBurst, getShow } from '../../store/actionCreators'
import { PreviewWrapper } from './style'

const IMGPreview = memo(props => {
    const { name } = props
    const state = useSelector(
        state => ({
            isShow: state.getIn(['moyu', 'isShow']),
            isBurst: state.getIn(['moyu', 'isBurst']),
            isSplash: state.getIn(['moyu', 'isSplash'])
        }),
        shallowEqual
    )
    const [isExit, setIsExit] = useState(null)
    const [isShow, setIsShow] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        if (state.isBurst && state.isShow && isExit) {
            dispatch(getSplashExit(isExit))
            dispatch(getBurst(!isExit))
            dispatch(getShow(!isExit))
        }
        if (state.isSplash && state.isShow && isExit) {
            dispatch(getSplashExit(isExit))
            dispatch(getSplash(!isExit))
            dispatch(getShow(!isExit))
        }
    }, [dispatch, isExit, state.isBurst, state.isSplash, state.isShow])
    const handleExit = () => {
        setIsExit(!isExit)
    }
    const handleShow = () => {
        setIsShow(true)
    }
    const chName = state.characterList[name] || []
    return (
        <PreviewWrapper cancel={isExit} show={state.isShow}>
            <div className='exit' onClick={e => handleExit()}>
                X
            </div>
            <div className='wrap'>
                {state.isBurst && (
                    <img
                        src={chName && chName.combatSkills[2].variants[0].gifUrl}
                        alt=''
                        loading='lazy'
                        className='burst'
                    />
                )}
                {state.isSplash && (
                    <img
                        src={
                            name === 'hutao'
                                ? 'https://api.genshin.dev/characters/hu-tao/gacha-splash'
                                : `https://api.genshin.dev/characters/${name.toLowerCase()}/gacha-splash`
                        }
                        alt=''
                        loading='lazy'
                        onClick={e => handleShow()}
                        className={`splash ${isShow && 'show'}`}
                    />
                )}
            </div>
        </PreviewWrapper>
    )
})

export default IMGPreview
