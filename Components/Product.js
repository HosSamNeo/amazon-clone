import Image from "next/image";
import { StarIcon } from "@heroicons/react/outline";
import ImgPlaceHolder from '../public/productPlaceHolder.webp';
import { nanoid } from "@reduxjs/toolkit";

const Product = ({description,title,price,category,rating:{rate}}) => {

    return (
        <div className="relative flex flex-col bg-white z-30 p-10 my-3 mx-3">
            <p className="absolute top-3 right-3 text-xs italic">{category}</p>
            <Image className="m-auto" src={ImgPlaceHolder} height={200} width={200} alt='product' />
            <h4 className="my-3">{title}</h4>
            <div className="flex">
                {
                    Array(Math.floor(rate)).fill().map(i => <StarIcon key={nanoid()} className="h-5 text-yellow-500" />)
                }
            </div>
            <p className="text-xs my-2 line-clamp-2">{description}</p>
            <div>
                <p className="py -2">${price}</p>
            </div>
            <button className="mt-auto button border border-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500">Add To Basket</button>
        </div>
    )

}

export default Product;