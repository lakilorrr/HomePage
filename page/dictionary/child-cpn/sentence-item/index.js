import React, { memo } from 'react'
import parse from 'html-react-parser'
import { SentenceWrapper } from './style'

const SentenceItem = memo(({ info, category }) => {
    const insertStrong = () => {
        let res = ''
        let s = ''
        for (let i = 0; i < info.offsets.length - 1; i++) {
            if (i % 2 === 0) {
                const sub = []
                sub.push(info.offsets[i], info.offsets[i + 1])
                const [st, ed] = sub
                if (i === 0) {
                    s = st === 0 ? '' : info.sentence.slice(0, st)
                } else {
                    s = st === 0 ? '' : res.slice(0, st + 35)
                }
                const word = info.sentence.slice(st, ed)
                const e = ed === info.sentence.length ? '' : info.sentence.slice(ed)
                res = s + '<strong class="highlight">' + word + '</strong>' + e
            }
        }
        return res
    }
    return (
        <SentenceWrapper>
            <div className='sentence'>{parse(insertStrong())}</div>
            <a href={category !== 'F' ? info.volume.locator : undefined} target='_blank' rel='noreferrer'>
                <div className='bottom-bar'>
                    <div className='time'>{info.volume.datePublished ? info.volume.datePublished.slice(0, 10) : info.volume.dateAdded.slice(0, 10)}</div>
                    <div className='copyright'>
                        <span className='author'>{category === 'F' ? info.volume.author : info.volume.corpus.name}</span>
                        <span className='resource'>{info.volume.title}</span>
                    </div>
                </div>
            </a>
        </SentenceWrapper>
    )
})

export default SentenceItem
