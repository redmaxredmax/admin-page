import React from 'react'
import { Input } from '../../components/ui/input'
import { useAddProduct } from './service/mutation/useAddProduct'
import { useNavigate } from 'react-router-dom'
import { ProductForm } from '../../components/product-form'
import { toast } from 'react-toastify'
import { useGetCategoryData } from '../addCategory/service/query/useGetCategoryData'


export const Add = () => {
  const { mutate, isPending } = useAddProduct()
  const { data, isLoading } = useGetCategoryData()
  const navigate = useNavigate()
  const submit = (data) => {
    const categoryId = data.category.split(",")[0]
    const categoryName=data.category.split(",")[1]
    const {category,...all}=data
    mutate({...all,categoryId,categoryName}, {
      onSuccess: () => {
        navigate('/main')
        toast.success("Successfully added!")
      }
    })
  }
  return (
    <ProductForm category={data} submit={submit} />
  )
}
