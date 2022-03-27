import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getSplashName, getShow, getBurst, getSplash } from '../../store/actionCreators'
import { CharacterInfo } from './styled'

const CharacterBar = memo(props => {
    const item = props.item
    const [avatarClick, setAvatarClick] = useState(false)

    const state = useSelector(
        state => ({
            characterList: state.getIn(['moyu', 'characterList']),
            splashExit: state.getIn(['moyu', 'splashExit']),
            isShow: state.getIn(['moyu', 'isShow']),
            isBurst: state.getIn(['moyu', 'isBurst']),
            isSplash: state.getIn(['moyu', 'isSplash'])
        }),
        shallowEqual
    )
    const chName = state.characterList[item.name] || []

    const dispatch = useDispatch()

    const isTraveler = name => {
        return /traveler/i.test(name)
    }
    const isAvatarClick = () => {
        setAvatarClick(!avatarClick)
    }

    const handleChouKa = () => {
        dispatch(getBurst(false))
        dispatch(getSplash(true))
        dispatch(getSplashName(item.name))
        dispatch(getShow(true))
    }
    const handleBurst = () => {
        dispatch(getBurst(true))
        dispatch(getSplash(false))
        dispatch(getSplashName(item.name))
        dispatch(getShow(true))
    }

    return (
        <CharacterInfo>
            <div className='character-img'>
                <img src={chName.iconURL} alt='' onClick={e => isAvatarClick()} className='icon-img' />
            </div>
            <img src={avatarClick ? chName.portraitImageURL : null} alt='' className={`card-img ${avatarClick && 'card-show'}`} />

            <div className='character-detail'>
                <div className='charater-name'>{item.name}</div>
                <div className='character-dpt'>{chName.description}</div>
                <div className='bottom-bar'>
                    {chName.talentMaterial && (
                        <div className='material-bar'>
                            <div className='material button'>
                                <img src={chName.talentMaterial[0].iconUrl} alt='' className='material-img' />
                                <div className='material-name'>{chName.talentMaterial[0].name}</div>
                            </div>

                            <div className='material button'>
                                <img src={chName.localSpecialty.iconUrl} alt='' className='material-img' />
                                <div className='material-name'>{chName.localSpecialty.name}</div>
                            </div>
                        </div>
                    )}
                    <div className='preview'>
                        {chName.combatSkills && chName.combatSkills[2].variants[0].gifUrl && (
                            <div className='burst button' onClick={e => handleBurst()}>
                                元素爆发
                            </div>
                        )}
                        {isTraveler(item.name) || (
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
