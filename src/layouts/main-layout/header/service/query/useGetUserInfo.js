import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../../config/request";


export const useGetUserInfo = () => {
    return (
        useQuery({
            queryKey: ['user-data'],
            queryFn: () => request.get('/users').then((res) => res.data)
        })
    )
}
