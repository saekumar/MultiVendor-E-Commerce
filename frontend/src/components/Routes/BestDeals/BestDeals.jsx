import styles from '@/styles/styles'
import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { productData } from '@/static/data'
import { HoverEffect } from '@/components/ui/card-hover-effect'

const BestDeals = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const deals =
      productData && productData.sort((a, b) => b.total_sell - a.total_sell)
    const firstFive = deals.slice(0, 5)
    setData(firstFive)
  }, [])
  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>Best Deals</div>

        <HoverEffect items={data} />
      </div>
    </div>
  )
}

export default BestDeals
