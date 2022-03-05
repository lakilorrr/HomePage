import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getSplashName, getShow, getBurst, getSplash } from '../../store/actionCreators'
import { CharacterInfo } from './styled'

const CharacterBar = memo(props => {
    const item = props.item
    const [avatarClick, setAvatarClick] = useState(false)
    const [splashClick, setSpalshClick] = useState(false)
    const [burstClick, setBurstClick] = useState(false)

    const state = useSelector(
        state => ({
            characterList: state.getIn(['moyu', 'characterList']),
            splashExit: state.getIn(['moyu', 'splashExit']),
            isShow: state.getIn(['moyu', 'isShow']),
            isBurst: state.getIn(['moyu', 'isBurst'])
        }),
        shallowEqual
    )
    const characterList = state.characterList

    const nameLowerCase = item.name.toLowerCase()
    const dispatch = useDispatch()

    useEffect(() => !state.isBurst && state.splashExit && setBurstClick(false), [state.splashExit, state.isBurst])
    useEffect(() => !state.isBurst && state.splashExit && setSpalshClick(false), [state.splashExit, state.isBurst])
    useEffect(() => dispatch(getSplash(splashClick)), [dispatch, splashClick])
    useEffect(() => {
        dispatch(getBurst(burstClick))
    }, [dispatch, burstClick])
    useEffect(() => {
        if (splashClick || burstClick) {
            dispatch(getSplashName(nameLowerCase))
            dispatch(getShow(true))
        }
    }, [dispatch, splashClick, burstClick, nameLowerCase])

    const isTraveler = name => {
        return /traveler/.test(name)
    }
    const isAvatarClick = () => {
        setAvatarClick(!avatarClick)
    }

    const handleChouKa = () => {
        setSpalshClick(true)
        setBurstClick(false)
    }
    const handleBurst = () => {
        setBurstClick(true)
        setSpalshClick(false)
    }

    return (
        <CharacterInfo>
            <div className='character-img'>
                <img src={item.iconURL} alt='' onClick={e => isAvatarClick()} className='icon-img' />
            </div>
            <img src={characterList[item.name]?.portraitImageURL} alt='' className={`card-img ${avatarClick && 'card-show'}`} />

            <div className='character-detail'>
                <div className='charater-name'>{item.name}</div>
                <div className='character-dpt'>{characterList[item.name]?.description}</div>
                <div className='bottom-bar'>
                    <div className='boss button'>
                        <div className='boss-name'>{characterList[item.name]?.talentMaterial[0].name}</div>
                        <img src={characterList[item.name]?.talentMaterial[0].iconUrl} alt='' className='boss-img' />
                    </div>
                    <div className='preview'>
                        <div className='burst button' onClick={e => handleBurst()}>
                            元素爆发
                        </div>
                        {isTraveler(nameLowerCase) || (
                            <div className='chouka button' onClick={e => handleChouKa()}>
                                来一发
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </CharacterInfo>
    )
})

export default CharacterBar
