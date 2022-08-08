import React, { lazy, Suspense } from "react"
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '@/pages/Home'
// const Home = lazy(() => import ('@/pages/Home'))
const Koalabean = lazy(() => import('@/pages/Kaolabean'))
const Sort = lazy(() => import('@/pages/Sort'))
const ShoppingCart = lazy(() => import('@/pages/ShoppingCart'))
const Mine = lazy(() => import('@/pages/Mine'))
const Search = lazy(() => import('@/pages/Search'))
const Detail = lazy(() => import('@/pages/Detail'))
const RouterConfig = () => {
    return (
        <Suspense fallback={null}>
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace={true} />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/kaolabean" element={<Koalabean />}></Route>
                <Route path="/sort" element={<Sort />}></Route>
                <Route path="/shoppingcart" element={<ShoppingCart />}></Route>
                <Route path="/mine" element={<Mine />}></Route>
                <Route path="/search" element={<Search />}></Route>
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
        </Suspense>
    )
}

export default RouterConfig
