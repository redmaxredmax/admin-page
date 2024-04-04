import React from 'react'
import { Input } from '../../components/ui/input'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import { useAddCategory } from './service/mutate/useAddCategory'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { CategoryForm } from '../../components/category-form/category-form'

export const AddCategory = () => {
    const { mutate } = useAddCategory()
    const navigate = useNavigate()

    const submit = (data) => {
        mutate(data, {
            onSuccess: () => {
                navigate('/main/category')
                toast.success("Category successfully added!")
            }
        })
    }
    return (
        <div>
            <CategoryForm submit={submit} />
        </div>
    )
}
