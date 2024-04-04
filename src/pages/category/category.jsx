import React from 'react'
import image from "/public/imgs/home.png"
import { DeleteIcon } from '/public/icons/delete-icon'
import { EditIcon } from '/public/icons/edit-icon'
import { Button } from '../../components/ui/button'
import { Link } from 'react-router-dom'
import { useGetCategoryData } from '../addCategory/service/query/useGetCategoryData'
import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { useDeleteCategory } from './service/mutate/useDeleteCategory'

export const Category = () => {
  const { data, isLoading } = useGetCategoryData()
  const { mutate } = useDeleteCategory()
  const client = useQueryClient()
  const deleteItem = (id) => {
    mutate(id, {
      onSuccess: (res) => {
        client.invalidateQueries({ mutationKey: ['delete-category'] })
        toast.success("Product deleted")
      },
      onError: (error) => {
        toast.error("error")
      }
    })

  }
  return (
    <div className='flex h-[70%] justify-between'>
      {
        data?.obj.length > 0 ?
          <div className='ml-10'>
            <ul className='flex '>
              <li className='w-[300px]'>
                <div className='flex gap-5 py-[35px] border-b-2'>
                  <span></span>
                  <h2 className='uppercase font-extrabold text-text_gray text-xs'>Category name</h2>
                </div>
              </li>
              <li className='w-[400px]'>
                <div className='flex gap-5  py-[35px] border-b-2'>
                  <h2 className='ml-5 uppercase font-extrabold text-text_gray text-xs'>Category Picture</h2>
                </div>
              </li>
              <li className='w-[102px]'>
                <div className='flex gap-5  py-[43px] border-b-2'>
                </div>
              </li>
            </ul>
            {data?.obj?.map((item) =>
              <ul key={item.id} className='flex'>
                <li className='w-[300px]'>
                  <div className='flex gap-5  py-[35px] border-b-2'>
                    <span></span>
                    <h2 className='font-extrabold text-base'>{item.name}</h2>
                  </div>
                </li>
                <li className='w-[400px]'>
                  <div className='flex gap-5  p-[6px] border-b-2'>
                    <img className='ml-2 object-contain w-[150px] h-[82px]' src={item.img} alt="img" />
                  </div>
                </li>
                <li className='w-[102px]'>
                  <div className='flex gap-2 justify-end pr-[30px] py-[31px] border-b-2 '>
                    <div className='px-2 py-1 rounded-md bg-blue-100 hover:bg-blue-300'>
                      <Link to={`/main/catalog/edit/${item.id}`}>
                        <EditIcon />
                      </Link>
                    </div>
                    <div className='px-2 py-1 rounded-md bg-blue-100 hover:bg-blue-300'>
                      <Button onClick={() => deleteItem(item.id)} icon1={<DeleteIcon />}></Button>
                    </div>
                  </div>
                </li>
              </ul>
            )}
          </div> :
          <div className='w-[1200px] text-center mx-auto pb-[59px]'>
            <h2 className='font-extrabold text-xl mb-[64px] '>You haven't created any categories yet</h2>
            <div className='w-[313px] mx-auto text-center mb-[66px]'>
              <img src={image} alt="img" />
            </div>
            <Link className='bg-green_btn text-white px-6 py-4 font-extrabold rounded-md hover:bg-green-700' to="/main/catalog/new">Create new category</Link>
          </div>
      }
      <div>
        {data?.obj.length > 0 ?
          <div className='flex  mb-7 mr-7'>
            <Link to="/main/catalog/new" className='bg-green_btn py-[10px] px-[30px] font-extrabold text-white rounded-lg hover:bg-green-800 text-end'>New Category</Link>
          </div> : ""
        }
      </div>
    </div >
  )
}
