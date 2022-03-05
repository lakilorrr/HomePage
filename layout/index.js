import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'

import HeaderNew from '../component/header-new'

export default memo(function LayOut() {
    return (
        <>
            <HeaderNew />
            <Outlet />
        </>
    )
})
