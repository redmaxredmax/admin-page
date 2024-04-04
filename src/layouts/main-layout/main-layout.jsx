import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Header } from './header'
import logo from "/public/icons/logo.svg"
import { HomeIcon } from "/public/icons/home-icon"
import { CategoryIcon } from "/public/icons/category-icon"
import { AddIcon } from "/public/icons/add-icon"


export const MainLayout = () => {

    return (
        <>
        
            <div className='flex'>
                <ul className=' bg-primary  p-[24px] pb-0 w-[97px] text-center '>
                    <li className='mb-[38px]'>
                        <a href="/">
                            <img src={logo} alt="logo" />
                        </a>
                    </li>   
                    <li className='rounded-lg hover:bg-focus mb-2 p-[15px] active:bg-focus'>
                        <Link className='' to="/main">
                            <HomeIcon />
                        </Link>
                    </li>
                    <li className='rounded-lg hover:bg-focus mb-2 p-[15px] active:bg-focus'>
                        <Link className=' ' to="/main/category">
                            <CategoryIcon />
                        </Link>
                    </li>
                    <li className='rounded-lg hover:bg-focus mb-2 p-[15px] active:bg-focus'>
                        <Link className=' ' to="/main/products">
                            <AddIcon />
                        </Link>
                    </li>
                </ul>
                <div className='w-[1430px] '>
                    <header className=''>
                        <Header />
                    </header>
                    <div className='bg-home_bg h-auto p-10'>
                        <div className='flex-grow-1 bg-white p-7 rounded-2xl'>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
