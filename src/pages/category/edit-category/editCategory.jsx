import React from 'react'
import { CategoryForm } from '../../../components/category-form/category-form'
import { useParams } from 'react-router-dom'
import { useGetSingleCategory } from './service/query/useGetSingleCategory'
import { useEditCategory } from './service/mutation/useEditCategory'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useQueryClient } from '@tanstack/react-query'

export const EditCategory = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { data, isLoading } = useGetSingleCategory(id)
    const { mutate } = useEditCategory(id)
    const client = useQueryClient()
    const submit = (data) => {
        mutate(data, {
            onSuccess: () => {
                navigate('/main/category')
                client.invalidateQueries({ queryKey: ['single-category', id] })
                toast.success("Category Updated!")
            }
        })
    }
    return isLoading ? <h2>loading...</h2> :
        <CategoryForm initialValue={data} submit={submit} />


}
