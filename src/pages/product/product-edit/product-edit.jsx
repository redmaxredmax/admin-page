import React from 'react'
import { ProductForm } from '../../../components/product-form'
import { useParams } from 'react-router-dom'
import { useGetSingleProduct } from '../service/query/useGetSingleProduct'
import { useEditProduct } from '../service/mutation/useEditProduct'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const ProductEdit = () => {
    const { id } = useParams()
    const { data, isLoading } = useGetSingleProduct(id)
    const { mutate } = useEditProduct(id)
    const navigate=useNavigate()
    const submit = (data) => {
        mutate(data,{
            onSuccess:()=>{
                navigate('/main/products'),
                toast.success("Product successfully updated!")
            }
        })
    }
    return isLoading?<h2>Loading...</h2>:
    <ProductForm category={data} initialValue={data} submit={submit} />

}
