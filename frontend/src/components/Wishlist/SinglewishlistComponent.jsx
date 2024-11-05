import styles from '@/styles/styles'
import React, { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { HiOutlineMinus, HiPlus } from 'react-icons/hi'
import { RxCross1 } from 'react-icons/rx'
const SinglewishlistComponent = ({ item }) => {
  console.log(item)
  const [value, setValue] = useState(1)
  const [totalPrice, setTotalPrice] = useState(item.price)
  const increment = (data) => {
    console.log('increment')
    setValue((prevValue) => {
      const newValue = prevValue < 10 ? prevValue + 1 : prevValue
      setTotalPrice(item.price * newValue)
      return newValue
    })
  }

  const decrement = (data) => {
    console.log('decrement')
    setValue((prevValue) => {
      const newValue = prevValue > 1 ? prevValue - 1 : prevValue
      setTotalPrice(item.price * newValue)
      return newValue
    })
  }
  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <div>
          <div
            className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`}
            onClick={() => increment(item)}
          >
            <HiPlus size={18} color="#fff" />
          </div>
          <span className="pl-[10px]">{item.qty}</span>
          <div
            className="bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
            onClick={() => decrement(item)}
          >
            <HiOutlineMinus size={16} color="#7d879c" />
          </div>
        </div>
        <img
          src={`${item?.img}`}
          alt=""
          className="w-[130px] h-min ml-2 mr-2 rounded-[5px]"
        />
        <div className="pl-[5px]">
          <h1>{item.name}</h1>
          <h4 className="font-[400] text-[15px] text-[#00000082]">
            ₹{item.price} * {value}
          </h4>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            INR.{totalPrice}
          </h4>
        </div>
        <BsFillCartPlusFill className="cursor-pointer" size={30} />
      </div>
    </div>
  )
}

export default SinglewishlistComponent
