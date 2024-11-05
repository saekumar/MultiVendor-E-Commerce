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
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import SingleCartItem from '../ShoppingCart/SingleCartItem'
import SinglewishlistComponent from './SinglewishlistComponent'
import { TbHeartFilled } from 'react-icons/tb'
const wishlistData = [
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
const WishlistComponent = () => {
  const [itemQuantity, setItemQuantity] = useState(1)
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button variant="outline">
          <AiOutlineHeart size={30} className="text-white" />
          <span className="absolute right-0 top-0 rounded-full bg-black/90 w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
            {wishlistData.length}
          </span>
        </button>
      </SheetTrigger>
      <SheetContent className="w-[500px] bg-orange-100">
        <SheetHeader>
          <SheetTitle>Your Wishlist </SheetTitle>
          <SheetDescription className="flex items-center gap-2">
            <TbHeartFilled size={30} fill="red" />
            <p className="">3 items</p>
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {wishlistData.map((item, index) => (
            <SinglewishlistComponent item={item} />
          ))}
        </div>
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default WishlistComponent
