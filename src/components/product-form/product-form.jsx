import React from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import z from "zod"


const scheme = z.object({
    title: z.string().min(1, "Field is empty!").max(40, "Max 40 letter"),
    fashion: z.string().min(1, "Field is empty!").max(40, "Max 40 letter"),
    code: z.string().min(1, "Field is empty!").max(40, "Max 40 letter"),
    country: z.string().min(1, "Field is empty!").max(40, "Max 40 letter"),
    desc: z.string().min(1, "Field is empty!").max(999, "Max 40 letter"),
    weight: z.string().min(1, "Field is empty!").max(40, "Max 40 letter"),
    length: z.string().min(1, "Field is empty!").max(40, "Max 40 letter"),
    width: z.string().min(1, "Field is empty!").max(40, "Max 40 letter"),
    height: z.string().min(1, "Field is empty!").max(40, "Max 40 letter"),
    photo: z.string().min(1, "Field is empty!").max(999, "Max: 40 letter "),
    selling_code: z.string().min(1, "Field is empty!").max(40, "Max 40 letter"),
    qr_code: z.string().min(1, "Field is empty!").max(40, "Max 40 letter"),
    cost: z.string().min(1, "Field is empty!").max(40, "Max 40 letter"),
    discount: z.string().min(1, "Field is empty!").max(40, "Max 40 letter"),
    cost_ozon: z.string().min(1, "Field is empty!").max(40, "Max 40 letter"),
    category: z.string().min(1, "Field is empty!").max(40, "Max 40 letter"),
})


export const ProductForm = ({ submit, initialValue, category }) => {
    const { register, formState: { errors }, handleSubmit } = useForm({ resolver: zodResolver(scheme) })
    return (
        <form onSubmit={handleSubmit(submit)} className=''>
            <div className='border p-10 rounded-lg mb-10'>
                <div className='mb-7'>
                    <Input variant="primary"  {...register('title', { required: false })} defaultValue={initialValue?.title} helperText={errors?.title?.message} label="Title *" error={false} type="text" />
                </div>
                <div className='flex gap-10'>
                    <div className='mb-7'>
                        <Input variant="input_small"  {...register('fashion', { required: false })} helperText={errors?.fashion?.message} defaultValue={initialValue?.fashion} label="Fashion *" error={false} type="text" />
                    </div>
                    <div className='mb-7'>
                        <Input variant="input_small"  {...register('code', { required: false })} defaultValue={initialValue?.code } helperText={errors?.code?.message} label="Manufacturer's code *" error={false} type="text" />
                    </div>
                </div>
                <div className='flex gap-10'>
                    <div className='mb-7'>
                        <Input variant="input_small"  {...register('country', { required: true })} helperText={errors?.country?.message} label="Country " placeholder="Китай" defaultValue={initialValue?.country } error={false} type="text" />
                    </div>
                </div>
                <div className='mb-7'>
                    <textarea className='bg-input_gray p-2 outline-none w-[400px] h-[150px]'   {...register('desc', { required: false })} defaultValue={initialValue?.desc } label="Comment *" type="text" />
                </div>
                <div className='flex gap-10'>
                    <div className='mb-7'>
                        <Input variant="input_extrasmall"  {...register('weight', { required: false })} helperText={errors?.weight?.message} defaultValue={initialValue?.weight } label="Weight, gramm" error={false} type="number" />
                    </div>
                    <div className='mb-7'>
                        <Input variant="input_extrasmall"  {...register('length', { required: false })} helperText={errors?.length?.message} defaultValue={initialValue?.length } label="Length, mm" error={false} type="number" />
                    </div>
                    <div className='mb-7'>
                        <Input variant="input_extrasmall"  {...register('width', { required: false })} helperText={errors?.width?.message} defaultValue={initialValue?.width} label="Width, mm" error={false} type="number" />
                    </div>
                    <div className='mb-7'>
                        <Input variant="input_extrasmall"  {...register('height', { required: false })} helperText={errors?.height?.message} defaultValue={initialValue?.height } label="Height, mm" error={false} type="number" />
                    </div>
                </div>
            </div>
            <div className='border p-10 rounded-lg pb-[50px]'>
                <div className='mb-7'>
                    <Input variant="primary"  {...register('photo', { required: false })}  label="{Photo} *" defaultValue={initialValue?.photo } helperText={errors?.photo?.message} placeholder="Image URL" error={false} type="text" />
                </div>
                <select {...register('category', { required: false })} className='mb-[32px] cursor-pointer'>
                    {category?.obj?.map((item) =>
                        <option key={item.id} value={`${item.id},${item.name}`}>{item.name}</option>
                    )}
                </select>
                <div className='flex gap-10'>
                    <div className='mb-7'>
                        <Input variant="input_small"  {...register('selling_code', { required: true })}  helperText={errors?.selling_code?.message} defaultValue={initialValue?.selling_code } label="Selling code *" error={false} type="number" />
                    </div>
                    <div className='mb-7'>
                        <Input variant="input_small"  {...register('qr_code', { required: true })} helperText={errors?.qr_code?.message} defaultValue="QR22342" label="QR Code *" error={false} type="text" />
                    </div>
                </div>
                <div className='flex gap-10 mb-[20px]'>
                    <div className='mb-7'>
                        <Input variant="input_extrasmall"  {...register('cost', { required: true })} helperText={errors?.cost?.message} defaultValue={initialValue?.cost } label="Cost" error={false} type="number" />
                    </div>
                    <div className='mb-7'>
                        <Input variant="input_extrasmall"  {...register('discount', { required: false })} helperText={errors?.discount?.message} defaultValue={initialValue?.discount } label="Discount" error={false} type="number" />
                    </div>
                    <div className='mb-7'>
                        <Input variant="input_extrasmall"  {...register('cost_ozon', { required: false })} helperText={errors?.cost_ozon?.message} defaultValue={initialValue?.cost_ozon } label="Cost of Ozon Premium" error={false} type="number" />
                    </div>
                </div>
                <Button variant="save_btn">Save</Button>
            </div>

        </form>
    )
}
