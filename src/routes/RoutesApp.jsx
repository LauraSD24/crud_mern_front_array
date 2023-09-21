import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../components/main/Main';
import AddUser from '../components/addUser/AddUser';
import EditUser from '../components/editUser/EditUser';

const RoutesApp = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/add' element={<AddUser/>}></Route>
        <Route path='/edit/:identity' element={<EditUser/>}></Route>
        <Route path='*' element={<Main/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;