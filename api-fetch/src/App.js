import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { missions } from './Store/store'
import Login from './Login/Login'
import { Api } from './API/Api'
import Details from './Details/Details'
const App = () => {
  return (
   <Provider store={missions}>
    <BrowserRouter>
        <Routes>
            <Route path='*' element={<Login />}></Route>
            <Route path='/API'element={<Api />} ></Route>
            <Route path='/Details' element={<Details />}></Route>
        </Routes>
   </BrowserRouter> 
   </Provider>
  )
}

export default App
