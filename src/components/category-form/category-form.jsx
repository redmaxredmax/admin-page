import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'

export const CategoryForm = ({ submit, initialValue }) => {
    const { register, formState: { errors }, handleSubmit } = useForm()

    return (    
        <div className=' pt-[70px] pb-[130px]'>
            <form onSubmit={handleSubmit(submit)} className='flex flex-col gap-5 items-center'>
                <h2 className='font-bold text-3xl text-primary'>Category</h2>
                <Input {...register('name', { required: false })} placeholder="Category name" defaultValue={initialValue?.name} label="Enter category name" variant="category" />
                <Input {...register('img', { required: false })} placeholder="Category photo" label="Enter category photo" defaultValue={initialValue?.img} variant="category" />
                <Button variant="category_btn">Save</Button>
            </form>
        </div>
    )
}
