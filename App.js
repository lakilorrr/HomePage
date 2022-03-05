import React, { memo } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './assets/css/normal.css'

import LayOut from './layout'
import Universe from './page/universe'
import Music from './page/music'
import MoYu from './page/moyu'
import Dictionary from './page/dictionary'

export default memo(function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LayOut />}>
                    <Route index element={<Universe />} />
                    <Route path='/moyu' element={<MoYu />} />
                    <Route path='/music' element={<Music />} />
                    <Route path='/dictionary' element={<Dictionary />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
})
