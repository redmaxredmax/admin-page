import React from 'react'
import image from "/public/imgs/home.png"
import { Button } from '../../components/ui/button'
import { Link } from 'react-router-dom'
import { useGetProducts } from '../product/service/query/useGetProducts'
import { useGetPagination } from '../product/service/query/useGetPagination'
import { EditIcon } from '/public/icons/edit-icon'
import { LeftIcon } from '/public/icons/left-icon'
import { RightIcon } from '/public/icons/right-icon'
import { SearchIcon } from '/public/icons/search-icon'
import { DeleteIcon } from '/public/icons/delete-icon'
import { useDeleteProducts } from '../product/service/mutation/useDeleteProducts'
import { useQueryClient } from '@tanstack/react-query'
import useDebounce from "../../config/useDebounce"

export const Home = () => {
  const [input, setInput] = React.useState('')
  const value = useDebounce(input)
  const { data, isLoading } = useGetProducts(value)
  const { mutate, isPending } = useDeleteProducts()
  const client = useQueryClient()
  const [page, setPage] = React.useState(1)
  const deleteItem = (id) => {
    mutate(id, {
      onSuccess: (res) => {
        client.invalidateQueries({ mutationKey: ['delete-item'] })
        toast.success("Product deleted")
      },
      onError: (error) => {
        toast.error("error")
      }
    })
  }
  const { data: productsData } = useGetPagination(page, value)
  const buttons = React.useMemo(() => Math.ceil(Number(productsData?.dataSize) / Number(productsData?.limit)), [productsData?.dataSize])
  return (
    <div> 
      {data?.page.length > 0 ?
        <div>
          <ul className='flex'>
            <li className='w-[350px]'>
              <div className='flex gap-5  py-[35px] border-b-2'>
                <input className='w-5 cursor-pointer' type="checkbox" />
                <h2 className='uppercase font-extrabold text-text_gray text-xs'>Name</h2>
              </div>
            </li>
            <li className='w-[150px]'>
              <div className='flex gap-5  py-[35px] border-b-2'>
                <h2 className='ml-5 uppercase font-extrabold text-text_gray text-xs'>Photo</h2>
              </div>
            </li>
            <li className='w-[200px]'>
              <div className='flex gap-5  py-[35px] border-b-2'>
                <h2 className=' uppercase font-extrabold text-text_gray text-xs'>Category</h2>
              </div>
            </li>
            <li className='w-[210px]'>
              <div className='flex gap-5  py-[35px] border-b-2'>
                <h2 className=' uppercase font-extrabold text-text_gray text-xs'>Fashion </h2>
              </div>
            </li>
            <li className='w-[162px]'>
              <div className='flex gap-5  py-[35px] border-b-2'>
                <h2 className=' uppercase font-extrabold text-text_gray text-xs ml-2'>Cost</h2>
              </div>
            </li>
            <li className='w-[162px]'>
              <div className='flex gap-5  py-[43px] border-b-2'>
              </div>
            </li>
          </ul>
          {productsData?.page.map((item) =>
            <ul className='pt-4 px-0 flex' key={item.id}>
              <li className='w-[360px]'>
                <div className='flex gap-5  py-[25px] border-b-2'>
                  <input className='w-4 cursor-pointer' type="checkbox" />
                  <h2 className=' font-extrabold text-base'>{item.title}</h2>
                </div>
              </li>
              <li className='w-[150px]'>
                <div className='flex gap-5  p-[5px] border-b-2'>
                  <img className='w-[100px] object-contain h-[65px]' src={item.photo} alt="img" />
                </div>
              </li>
              <li className='w-[202px]'>
                <div className='flex gap-5  py-[25px] border-b-2'>
                  <h2 className='text-center font-semibold text-base'>{item.categoryName}</h2>
                </div>
              </li>
              <li className='w-[210px]'>
                <div className='flex gap-5 py-[25px] border-b-2'>
                  <h2 className=' font-semibold text-base'>{item.fashion}</h2>
                </div>
              </li>
              <li className='w-[162px]'>
                <div className='flex gap-5 py-[25px] border-b-2'>
                  <h2 className=' font-semibold text-base'>{item.cost} sum</h2>
                </div>
              </li>
              <li className='w-[162px]'>
                <div className='flex gap-2 justify-end pr-[3  0px] py-[21px] border-b-2 '>
                  <div className='px-2 py-1 rounded-md bg-blue-100 hover:bg-blue-300'>
                    <Button icon1={<EditIcon />}></Button>
                  </div>
                  <div className='px-2 py-1 rounded-md bg-blue-100 hover:bg-blue-300'>
                    <Button onClick={() => deleteItem(item.id)} icon1={<DeleteIcon />}></Button>
                  </div>
                </div>
              </li>
            </ul>
          )}
          <div className='flex justify-between mt-7 mx-7'>
            <div>
              <Link to="/main/category/add" className='bg-green_btn py-[10px] px-[30px] font-extrabold text-white rounded-lg hover:bg-green-800 text-end'>New Product</Link>
            </div>
            <div className=' flex justify-end gap-2'>
              <button className='px-3 py-1  bg-blue-100 rounded-md' onClick={() => setPage(page - 1)}>
                <LeftIcon />
              </button>
              {Array(buttons ? buttons : 0).fill(null).map((item, i) =>
                <div key={i}>
                  <button onClick={() => setPage(i + 1)} className={`px-3 py-1  bg-blue-100 rounded-md ${page === i + 1 ? "bg-blue-400 text-white font-bold" : "bg-blue-100"}`}>{i + 1}</button>
                </div>
              )}
              <button className='px-3 py-1  bg-blue-100 rounded-md' onClick={() => setPage(page + 1)}>
                <RightIcon />
              </button>
            </div>
          </div>
        </div> :
        <div className='w-[1200px] text-center mx-auto pb-[59px]'>
          <h2 className='font-extrabold text-xl mb-[64px] '>You haven't created any products yet!</h2>
          <div className='w-[313px] mx-auto text-center mb-[66px]'>
            <img src={image} alt="img" />
          </div>
          <Link className='bg-green_btn text-white px-6 py-4 font-extrabold rounded-md hover:bg-green-700' to="/main/category/add">Create product</Link>
        </div>}
    </div>
  )
}
