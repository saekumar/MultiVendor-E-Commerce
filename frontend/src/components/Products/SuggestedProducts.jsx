import { productData } from '@/static/data'
import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import ProductCard from '../Routes/ProductCard/ProductCard'
import styles from '@/styles/styles'

const SuggestedProducts = ({ data }) => {
  const [products, setProducts] = useState(null)
  console.log(data.category)
  useEffect(() => {
    const relatedProducts =
      productData &&
      productData.filter((prod) => prod.category === data.category)
    setProducts(relatedProducts)
  }, [])
  console.log(products)
  return (
    <div>
      {data ? (
        <div className={`p-4 ${styles.section}`}>
          <h2
            className={`${styles.heading} text-[25px] font-[500] border-b mb-5`}
          >
            Related Products
          </h2>
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
            {products && products.map((i, index) => <ProductCard data={i} />)}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default SuggestedProducts
