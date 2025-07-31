import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './sections/Home'
import NotFound from './sections/NotFound'
import Pizza from './sections/Pizza'
import Wok from './sections/Wok'
import Alert from './sections/Alert'
import Like from './sections/Like'
import Profile from './sections/Profile'
import Buscket from './sections/Buscket'
import Rolls from './TypesOfFood/Rolls'
import Sushi from './TypesOfFood/Sushi'
import Sets from './TypesOfFood/Sets'
import Bowls from './TypesOfFood/Bowls'
import Drinks from './TypesOfFood/Drinks'
import News from './sections/News'

const App = () => {
  return (
    <div>

      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />}/>
      <Route path='/alert' element={<Alert />}/>
      <Route path='/like' element={<Like />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/buscket' element={<Buscket />} />
      <Route path='/Роллы' element={<Rolls />} />
      <Route path='/Суши' element={<Sushi />} />
      <Route path='/Сеты' element={<Sets />} />
      <Route path='/Боулы' element={<Bowls />} />
      <Route path='/Напитки' element={<Drinks />} />
      <Route path='/новости' element={<News />} />
      
      

     {/*  <Route path='/pizza' element={<Pizza />}/>
      <Route path='/wok' element={<Wok />}/> */}
      </Routes>




    </div>
  )
}

export default App