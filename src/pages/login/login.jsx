import React from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import { useLogin } from './service/useLogin'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'
import { saveState } from '../../config/storage'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"

const scheme = z.object({
    email: z.string().min(14, "Minimum number of letters: 14").max(99, ""),
    password: z.string().min(3, "Minimum number of letters: 3").max(99, "")
})

export const Login = () => {
    const { register, formState: { errors }, reset, handleSubmit } = useForm({ resolver: zodResolver(scheme) })
    const { mutate, isPending } = useLogin()
    const navigate = useNavigate()
    const submit = (data) => {
        mutate(data, {
            onSuccess: (res) => {
                Cookies.set('user_token', res.accessToken, { expires: 1 })
                saveState('user', res.user)
                navigate('/main', { replace: true })
                toast.success("Signing in completed!")
            }
        })
        reset()
    }
    return (
        <div className='fixed inset-0 bg-[#0000007f]'>
            <form onSubmit={handleSubmit(submit)} className='w-[500px] py-[50px] rounded-3xl absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center bg-white'>
                <div className='mb-3 flex flex-col w-[300px] mx-auto'>
                    <h1 className='text-3xl font-semibold text-blue-800 mb-3 text-center'>Sign In</h1>
                    <div className='mb-3 text-start'>
                        <Input variant="input" {...register('email', { required: true })} label="Email" placeholder="Enter email" type="email" helperText={errors?.email?.message} />
                    </div>
                    <div className='mb-3 text-start'>
                        <Input errors={errors?.password} variant="input" {...register('password', { required: true })} label="Password" placeholder="Enter password" helperText={errors?.password?.message} type="password" />
                    </div>

                </div>
                <Button type={"submit"} variant="login">LOG IN</Button>
            </form>
        </div>
    )
}
