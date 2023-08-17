import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css"
import Cart from "./pages/Cart";
import LogIn from "./pages/LogIn";
import Main from "./pages/Main";
import Product from "./pages/Product";
import Review from "./pages/Review";
import SignUp from "./pages/SignUp";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import ProductList from "./pages/ProductList";
import EditMember from "./pages/EditMember";
import OrderInquiry from "./pages/OrderInquiry";
import CancelHistory from "./pages/CancelHistory";
import Category from "./pages/Category";
import CategoryDetail from "./pages/CategoryDetail";
import AddressChange from "./pages/AddressChange";
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
      <Route path='/productlist' element={<ProductList />}></Route>
      <Route path='/editmember' element={<EditMember />}></Route>
      <Route path='/orderinquiry' element={<OrderInquiry />}></Route>
      <Route path='/cancelhistory' element={<CancelHistory />}></Route>
      <Route path='/category' element={<Category />}></Route>
      <Route path='/categorydetail' element={<CategoryDetail />}></Route>
      <Route path='/AddressChange' element={<AddressChange />}></Route>
    </Routes>
    </BrowserRouter>
  )
} 
export default App