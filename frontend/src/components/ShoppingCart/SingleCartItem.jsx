import styles from '@/styles/styles'
import React, { useState } from 'react'
import { HiOutlineMinus, HiPlus } from 'react-icons/hi'
import { RxCross1 } from 'react-icons/rx'

const SingleCartItem = ({ item, updateQuantity }) => {
  const [value, setValue] = useState(item.quantity)

  const increment = () => {
    setValue((prevValue) => {
      const newValue = prevValue < 10 ? prevValue + 1 : prevValue
      updateQuantity(newValue)
      return newValue
    })
  }

  const decrement = () => {
    setValue((prevValue) => {
      const newValue = prevValue > 1 ? prevValue - 1 : prevValue
      updateQuantity(newValue)
      return newValue
    })
  }

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <div>
          <div
            className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`}
            onClick={increment}
          >
            <HiPlus size={18} color="#fff" />
          </div>
          <span className="pl-[10px]">{value}</span>
          <div
            className="bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
            onClick={decrement}
          >
            <HiOutlineMinus size={16} color="#7d879c" />
          </div>
        </div>
        <img
          src={item.img}
          alt=""
          className="w-[130px] h-min ml-2 mr-2 rounded-[5px]"
        />
        <div className="pl-[5px]">
          <h1>{item.name}</h1>
          <h4 className="font-[400] text-[15px] text-[#00000082]">
            ₹{item.price} * {value}
          </h4>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            INR. {item.price * value}
          </h4>
        </div>
        <RxCross1 className="cursor-pointer" />
      </div>
    </div>
  )
}

export default SingleCartItem
