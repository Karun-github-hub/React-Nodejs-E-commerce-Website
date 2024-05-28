import { Route, Routes } from 'react-router-dom';
import Homepage from "./components/Pages/Homepage"
import ShopPage from "./components/Pages/ShopPage"
import BlogPage from "./components/Pages/BlogPage"
import ContactPage from "./components/Pages/ContactPage"
import CartPage from "./components/Pages/CartPage"
import AuthPage from "./components/Pages/AuthPage"
import ProductDetailsPage from "./components/Pages/ProductDetailsPage"
import BlogDetailsPage from "./components/Pages/BlogDetailsPage"
import './App.css';
import UserPage from './components/Pages/Admin/UserPage';
import CategoryPage from './components/Pages/Admin/Categories/CategoryPage';
import UpdateCategoryPage from './components/Pages/Admin/Categories/UpdateCategoryPage';
import CreateCategoryPage from './components/Pages/Admin/Categories/CreateCategoryPage';
import CreateProductPage from './components/Pages/Admin/Products/CreateProductPage';
import ProductPage from './components/Pages/Admin/Products/ProductPage';
import UpdateProductPage from './components/Pages/Admin/Products/UpdateProductPage';
import CouponPage from './components/Pages/Admin/Coupons/CouponPage';
import CreateCouponPage from './components/Pages/Admin/Coupons/CreateCouponPage';
import UpdateCouponPage from './components/Pages/Admin/Coupons/UpdateCouponPage';
import Success from './components/Pages/Success';
import OrderPage from './components/Pages/Admin/OrderPage';
import DashboardPage from './components/Pages/Admin/DashboardPage';
function App() {

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/blog/:id" element={<BlogDetailsPage />} />
      <Route path="/success" element={<Success />} />
      <Route path="/admin/*">
       
        <Route index element={<DashboardPage />} />
        <Route path="users" element={<UserPage />} />
        <Route path="categories" element={<CategoryPage />} />
        <Route path="categories/create" element={<CreateCategoryPage />} />
        <Route path="categories/update/:id" element={<UpdateCategoryPage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="products/create" element={<CreateProductPage />} />
        <Route path="products/update/:id" element={<UpdateProductPage />} />
        <Route path="coupons" element={<CouponPage />} />
        <Route path="coupons/create" element={<CreateCouponPage />} />
        <Route path="coupons/update/:id" element={<UpdateCouponPage />} />
        <Route path="orders" element={<OrderPage />} />  
      </Route>

    </Routes>
  )
}

export default App
