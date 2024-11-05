import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  LoginPage,
  SignUpPage,
  ActivationPage,
  HomePage,
  ProductsPage,
  BestSellingPage,
  Eventpage,
  FaqPage,
  ProductDetailsPage,
} from './Routes'
import toast, { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadUser } from './reduxOperations/actions/user'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])
  return (
    <>
      <div className="bg-orange-50/40">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route
              path="/activation/:activationToken"
              element={<ActivationPage />}
            />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:name" element={<ProductDetailsPage />} />
            <Route path="/best-selling" element={<BestSellingPage />} />
            <Route path="/events" element={<Eventpage />} />
            <Route path="/faq" element={<FaqPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Toaster position="bottom-right" reverseOrder={true} />
    </>
  )
}

export default App
