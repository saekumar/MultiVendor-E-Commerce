import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { IoBagHandle } from 'react-icons/io5'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import SingleCartItem from './SingleCartItem'
import { Link } from 'react-router-dom'

const cartData = [
  {
    name: 'Iphone 14 pro max',
    img: 'https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg',
    price: 85000,
    quantity: 1,
  },
  {
    name: 'Iphone 14 pro max',
    img: 'https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg',
    price: 85000,
    quantity: 1,
  },
  {
    name: 'Iphone 14 pro max',
    img: 'https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg',
    price: 85000,
    quantity: 1,
  },
]

const ShoppingCartComponent = () => {
  const [cartItems, setCartItems] = useState(cartData)

  // Calculate total price dynamically based on cartItems array
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const updateQuantity = (index, newQuantity) => {
    const updatedItems = [...cartItems]
    updatedItems[index].quantity = newQuantity
    setCartItems(updatedItems)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button variant="outline">
          <AiOutlineShoppingCart size={30} className="text-white" />
          <span className="absolute right-0 top-0 rounded-full bg-black/90 w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
            {cartData.length}
          </span>
        </button>
      </SheetTrigger>
      <SheetContent className="w-[500px] bg-orange-100">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription className="flex items-center gap-2">
            <IoBagHandle size={30} />
            <p>{cartItems.length} items</p>
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {cartItems.map((item, index) => (
            <SingleCartItem
              key={index}
              item={item}
              updateQuantity={(newQuantity) =>
                updateQuantity(index, newQuantity)
              }
            />
          ))}
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <button className="p-8 mb-3">
              <Link to="/checkout">
                <div className="h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]">
                  <h1 className="text-[#fff] text-[18px] font-[600] p-4">
                    {`Checkout ₹${totalPrice} /-`}
                  </h1>
                </div>
              </Link>
            </button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default ShoppingCartComponent
