import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import IMGPreview from './child-cpn/img-preview'
import { getTodayMaterialAction, getCharacterListAction } from './store/actionCreators'
import CharacterBar from './child-cpn/character-bar'
import { MoyuWrapper } from './style'

export default memo(function MoYu() {
    const [bookIdx, setBookIdx] = useState(0)
    const state = useSelector(
        state => ({
            talentBooks: state.getIn(['moyu', 'talentBooks']),
            characterList: state.getIn(['moyu', 'characterList']),
            splashName: state.getIn(['moyu', 'splashName']),
            isShow: state.getIn(['moyu', 'isShow'])
        }),
        shallowEqual
    )
    const talentBooks = state.talentBooks
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTodayMaterialAction())
    }, [dispatch])
    useEffect(() => {
        if (talentBooks !== []) {
            const list = []
            for (let book of talentBooks) {
                book.characters.map((item, idx) => list.push(item.name))
            }
            dispatch(getCharacterListAction(list))
        }
    }, [dispatch, talentBooks])

    const handleBookIdx = idx => {
        setBookIdx(idx)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <MoyuWrapper>
            {state.isShow && <IMGPreview name={state.splashName} />}

            <div className='container'>
                <div className='exp-item'>
                    <div className='c-inner'>
                        <div className='slick-track'>
                            <div className='tab-bar-title'>{talentBooks[bookIdx]?.source}</div>
                            <ul className='tab-bnt'>
                                {talentBooks &&
                                    talentBooks.map((item, idx) => {
                                        return (
                                            <li
                                                className={`tab-bnt-item ${idx === bookIdx && 'tab-bnt-selected'}`}
                                                key={item._id}
                                                onClick={e => handleBookIdx(idx)}>
                                                <img src={item.iconUrl} alt='' className='tlt-book-img' />
                                                <div className='tab-bnt-title'>{item.name}</div>
                                            </li>
                                        )
                                    })}
                            </ul>
                            {talentBooks[bookIdx] &&
                                talentBooks[bookIdx].characters.map((item, idx) => {
                                    return <CharacterBar item={item} key={item.name} />
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </MoyuWrapper>
    )
})
