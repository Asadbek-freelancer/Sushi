import React from 'react'
import FoodsMenu from '../TypesOfFood/FoodsMenu'
import { Link } from 'react-router'
import Slider from '../animation/Slider'

const Header = () => {
  return (
    <div>
        <FoodsMenu />

        <div className="bg-white rounded-2xl flex items-center">
            <div className="">
                <h1 className='text-6xl w-lg font-bold mb-6'>Ninja Sushi в Киеве! Пока только на левом берегу</h1>
            <p className='text-gray-700'>Доставку делаем с 10:00 до 19:30</p>
            <Link to='/новости'>
            <button className='p-4 pl-16 pr-16 bg-[#00CC2D] cursor-pointer mt-6 border-none rounded-2xl hover:scale-105 duration-1000'>
                Перейти к новости
            </button>
            </Link>
            </div>
            <img src="../../images/Баннер на главном.png" alt="" className='w-xl' />
        </div>
        <Slider />
    </div>
  )
}

export default Header