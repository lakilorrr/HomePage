import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import IMGPreview from './child-cpn/img-preview'
import { getTodayMaterialAction, getCharacterBarAction, getBookIdx } from './store/actionCreators'
import CharacterBar from './child-cpn/character-bar'
import { MoyuWrapper } from './style'

export default memo(function MoYu() {
    const state = useSelector(
        state => ({
            talentBooks: state.getIn(['moyu', 'talentBooks']),
            bookIdx: state.getIn(['moyu', 'bookIdx']),
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
        dispatch(getCharacterBarAction(state.bookIdx))
    }, [dispatch, state.bookIdx, talentBooks])

    const handleBookIdx = idx => {
        dispatch(getBookIdx(idx))
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
                            <div className='tab-bar-title'>{talentBooks[state.bookIdx]?.source}</div>
                            <ul className='tab-bnt'>
                                {talentBooks &&
                                    talentBooks.map((item, idx) => {
                                        return (
                                            <li
                                                className={`tab-bnt-item ${idx === state.bookIdx && 'tab-bnt-selected'}`}
                                                key={item._id}
                                                onClick={e => handleBookIdx(idx)}>
                                                <img src={item.iconUrl} alt='' className='tlt-book-img' />
                                                <div className='tab-bnt-title'>{item.name}</div>
                                            </li>
                                        )
                                    })}
                            </ul>
                            {talentBooks[state.bookIdx] &&
                                talentBooks[state.bookIdx].characters.map((item, idx) => {
                                    return <CharacterBar item={item} key={item.name} />
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </MoyuWrapper>
    )
})
