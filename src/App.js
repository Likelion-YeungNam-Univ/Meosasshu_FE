import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Cart from "./pages/Cart";
import LogIn from "./pages/LogIn";
import Main from "./pages/Main";
import Product from "./pages/Product";
import Review from "./pages/Review";
import SignUp from "./pages/SignUp";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import "./App.css"

const App = () =>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/login' element={<LogIn />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/product' element={<Product />}></Route>
      <Route path='/review' element={<Review />}></Route>
      <Route path='/payment' element={<Payment />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
    </Routes>
    </BrowserRouter>
  )
} 
export default App