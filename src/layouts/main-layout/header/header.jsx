import React from 'react'
import { Button } from '../../../components/ui/button'
import { LogOutIcon } from "/public/icons/log-out-icon"
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import {useGetUserInfo} from "./service/query/useGetUserInfo"


export const Header = () => {
  const location = useLocation()
  const {data,isLoading}=useGetUserInfo()
  console.log(data);
  const navigate = useNavigate()
  const submit = () => {
    Cookies.remove('user_token')
    navigate('/', { replace: true })
  }
  return (
    <div className='w-[100%] '>
      <div className='bg-white px-10 py-4 flex justify-between '>
        <div >
          <h1 className='font-extrabold'>{location.pathname.slice(6, 14) == "" ? "HOME" : location.pathname.slice(6, 14).toLocaleUpperCase()}</h1>
          <p className='font-bold text-text_gray'>{location.pathname.slice(1, 20)}</p>
        </div>
        <div>
          <Button onClick={submit} variant="logout" icon1={<LogOutIcon />}>Выйти</Button>
        </div>
      </div>
    </div>
  )
}
