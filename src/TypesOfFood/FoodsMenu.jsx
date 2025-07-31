import React from 'react'
import { NavLink } from 'react-router' // ОБРАТИ ВНИМАНИЕ: должно быть 'react-router-dom', не просто 'react-router'

const types = [
  { name: 'Роллы', icon: '../../icons/ролы.svg' },
  { name: 'Суши', icon: '../../icons/суши.svg' },
  { name: 'Сеты', icon: '../../icons/сеты.svg' },
  { name: 'Боулы', icon: '../../icons/боулы.svg' },
  { name: 'Напитки', icon: '../../icons/напитки.svg' },
  { name: 'Соусы', icon: '../../icons/соусы.svg' }
]

const colorTypes = [
  { name: 'Роллы', icon: '../../icons/роллыЦ.svg' },
  { name: 'Суши', icon: '../../icons/сушиЦ.svg' },
  { name: 'Сеты', icon: '../../icons/сетыЦ.svg' },
  { name: 'Боулы', icon: '../../icons/боулыЦ.svg' },
  { name: 'Напитки', icon: '../../icons/напиткиЦ.svg' },
  { name: 'Соусы', icon: '../../icons/соусыЦ.svg' }
]

const FoodsMenu = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-around p-2 bg-white rounded-lg w-2xl mb-7">
        <div className="flex gap-12 items-center">
          {types.map((item, index) => (
            <NavLink
              to={`/${item.name.toLowerCase()}`}
              key={item.name}
              className="cursor-pointer text-center"
            >
              {({ isActive }) => (
                <div className="text-center">
                  <img
                    src={isActive ? colorTypes[index].icon : item.icon}
                    alt={item.name}
                    className=""
                  />
                  <p className={`text-sm ${isActive ? 'text-amber-500' : 'text-gray-700'}`}>
                    {item.name}
                  </p>
                </div>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FoodsMenu
