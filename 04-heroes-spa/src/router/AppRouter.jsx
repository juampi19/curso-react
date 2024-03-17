import { Routes, Route, Navigate } from 'react-router-dom';

import { MarvelPage } from '../heroes/pages/MarvelPage';
import { DCPage } from '../heroes/pages/DCPage';
import { Login } from '../auth/pages/Login';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='marvel' element={ <MarvelPage /> }/>
        <Route path='dc'element={ <DCPage /> }/>
        <Route path='login'element={ <Login /> }/>

        <Route path='/'element={ <Navigate to={'/marvel'} /> }/>
      </Routes>
    
    
    </>
  )
}
