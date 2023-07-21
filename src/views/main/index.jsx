import React, { memo } from 'react'
import { HashRouter,Routes,Route } from "react-router-dom"
import Home from '@/layout/Home'

export default memo(function HYMain() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </HashRouter>
  )
})
