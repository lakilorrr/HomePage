import React, { memo, useCallback, useEffect, useState } from 'react'
import { changeCurrentSongIdx } from '../../store/actionCreators'
import { showSingers } from '../../../../util/showSingers'
import { SongItemWrapper } from './style'
import { useDispatch } from 'react-redux'

const ToplistItem = memo(({ songInfo, index, playingStatus, audioStatus }) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [songId, setSongId] = useState()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeCurrentSongIdx(songId))
    }, [dispatch, songId])

    const handlePlay = useCallback(() => {
        setSongId(songInfo.id)
        isPlaying ? audioStatus.pause() : audioStatus.play()
        setIsPlaying(!isPlaying)
        playingStatus(!isPlaying)
    }, [isPlaying, songInfo.id, playingStatus, audioStatus])

    return (
        <SongItemWrapper>
            <div className='rank'>{index + 1}</div>
            <div className='song-info'>
                <div className='song-name-box'>
                    <i className={`play-button musicIcon ${!isPlaying ? 'icon-bofang' : 'icon-zanting'}`} onClick={handlePlay}></i>
                    <div className='song-name nowrap' title={songInfo.name}>
                        {songInfo.name}
                    </div>
                </div>
                <div className='song-singers nowrap' title={showSingers(songInfo.ar)}>
                    {showSingers(songInfo.ar)}
                </div>
            </div>
        </SongItemWrapper>
    )
})

export default ToplistItem
