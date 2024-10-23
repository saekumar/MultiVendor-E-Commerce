import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import ProductCard from '@/components/Routes/ProductCard/ProductCard'
import { productData } from '@/static/data'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const ProductsPage = () => {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category')
  const [data, setData] = useState([])
  useEffect(() => {
    if (category === null) {
      const allProds =
        productData &&
        productData.sort((prod1, prod2) => prod1.total_sell - prod2.total_sell)
      setData(allProds)
    } else {
      const categorisedProdData = productData.filter(
        (prod) => prod.category === category
      )
      setData(categorisedProdData)
    }
  }, [searchParams])
  console.log(data)
  return (
    <div className="">
      <Header activeHeading={3} />
      {data.length === 0 && (
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-2xl text-center text-gray-900">
            No products available
          </p>
        </div>
      )}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((product, index) => (
            <ProductCard key={index} data={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductsPage
