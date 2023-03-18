import React from 'react'
import ContextApi from './context/contextApi'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Feed from './components/Feed'
import SearchResult from './components/SearchResults'
import VideoDetails from './components/VideoDetails'

const App = () => {
  return (
    <>
      <ContextApi>
           <BrowserRouter>
            <Header/>

            <Routes>
              <Route exact path='/' element={<Feed/>}></Route>
              <Route exact path='/searchresult/:searchQuery' element={<SearchResult/>}></Route>
              <Route exact path='/video/:id' element={<VideoDetails/>}></Route>
            </Routes>
           
           
           </BrowserRouter>


      </ContextApi>

    </>
  )
}

export default App

