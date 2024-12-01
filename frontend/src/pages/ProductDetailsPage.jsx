import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import ProductDetails from '@/components/Products/ProductDetails'
import SuggestedProducts from '@/components/Products/SuggestedProducts'
import { productData } from '@/static/data'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailsPage = () => {
  const { name } = useParams()
  const [data, setData] = useState(null)
  const productName = name.replace(/-/g, ' ')
  useEffect(() => {
    const prodData = productData.find((i) => i.name === productName)
    setData(prodData)
  }, [])
  console.log(name)
  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      {data && <SuggestedProducts data={data} />}
      <Footer />
    </div>
  )
}

export default ProductDetailsPage
