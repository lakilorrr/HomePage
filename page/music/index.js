import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getSearchResultAction, getTopListAction, changeCurrentSongIdx } from './store/actionCreators'
import ToplistItem from './child-cpn/toplist-item'
import { showSingers } from '../../util/showSingers'
import { MusicWrapper } from './style'

export default memo(function Music() {
    const [currentSongIdx, setCurrentSongIdx] = useState()
    const [isHover, setIsHover] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [hasCopyright, setHasCopyright] = useState()
    const audioRef = useRef()

    const state = useSelector(
        state => ({
            musicSearch: state.getIn(['header', 'musicSearch']),
            searchResult: state.getIn(['music', 'searchResult']),
            topList: state.getIn(['music', 'topList']),
            songId: state.getIn(['music', 'songId'])
        }),
        shallowEqual
    )
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTopListAction())
    }, [dispatch])
    useEffect(() => {
        dispatch(getSearchResultAction(state.musicSearch))
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [dispatch, state.musicSearch])
    useEffect(() => {
        dispatch(changeCurrentSongIdx(currentSongIdx))
    }, [dispatch, currentSongIdx])

    const getTime = duration => {
        const stamp = +duration
        const date = new Date(stamp)
        const min = date.getMinutes()
        const minutes = min < 10 ? '0' + min : min
        const sec = date.getSeconds()
        const seconds = sec < 10 ? '0' + sec : sec
        return minutes + ':' + seconds
    }
    const topListItemPlaying = itemPlaying => {
        setIsPlaying(itemPlaying)
    }

    const controlPlaying = useCallback(() => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play()
        setIsPlaying(!isPlaying)
    }, [isPlaying])
    const resultPlaying = useCallback(
        item => {
            setCurrentSongIdx(item.id)
            hasCopyright ? setIsPlaying(true) : setIsPlaying(false)
        },
        [hasCopyright]
    )

    return (
        <div className='container'>
            <div className='exp-item'>
                <div className='c-inner'>
                    <div className='slick-track'>
                        <MusicWrapper>
                            <div className='result-container'>
                                <ul className='list-header'>
                                    <li className='header-songName'>歌曲</li>
                                    <li className='header-singers'>歌手</li>
                                    <li className='header-album'>专辑</li>
                                    <li className='header-duration'>时长</li>
                                </ul>
                                {state.searchResult.length > 0 ? (
                                    state.searchResult.map((item, idx) => {
                                        return (
                                            <div className='resultItem' key={item.id} onClick={e => resultPlaying(item)}>
                                                <div className='song-name-box'>
                                                    <div className='song-name nowrap' title={`${item.name}${item.alia[0] ? item.alia[0] : ''}`}>
                                                        {item.name}
                                                    </div>
                                                    {item.alia[0] && <span className='song-alia'>{`(${item.alia[0]})`}</span>}
                                                </div>
                                                <div className='song-singers nowrap' title={showSingers(item.ar)}>
                                                    {showSingers(item.ar)}
                                                </div>
                                                <div className='album nowrap' title={item.al.name}>
                                                    {item.al.name}
                                                </div>
                                                <div className='song-dt' title={getTime(item.dt)}>
                                                    {getTime(item.dt)}
                                                </div>
                                            </div>
                                        )
                                    })
                                ) : (
                                    <div className='no-result'>糟糕，没有搜索</div>
                                )}
                            </div>
                            <div className='toplist-container'>
                                <h3 className='list-title'>网易云音乐飙升榜</h3>
                                <div className='song-table-fixed'>
                                    <div className='song-table'>
                                        {state.topList &&
                                            state.topList.map((item, idx) => {
                                                return (
                                                    <ToplistItem
                                                        songInfo={item}
                                                        index={idx}
                                                        playingStatus={topListItemPlaying}
                                                        audioStatus={audioRef.current}
                                                        key={item.id}
                                                    />
                                                )
                                            })}
                                    </div>
                                </div>
                            </div>
                            <div className='play-control-box' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                                <div
                                    className={`play-control tab-bnt-item musicIcon ${isPlaying ? 'icon-zanting' : 'icon-bofang'} `}
                                    onClick={controlPlaying}></div>
                                <audio
                                    controls
                                    autoPlay
                                    ref={audioRef}
                                    src={`https://music.163.com/song/media/outer/url?id=${state.songId}.mp3`}
                                    className={`audio-bar ${isHover ? 'show' : ''}`}
                                    onPause={() => setIsPlaying(false)}
                                    onPlay={() => setIsPlaying(true)}
                                    onPlaying={() => setHasCopyright(true)}></audio>
                            </div>
                        </MusicWrapper>
                    </div>
                </div>
            </div>
        </div>
    )
})
