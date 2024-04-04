import { request } from "../../../../config/request";
import { useQuery } from "@tanstack/react-query";


export const useGetCategoryData = () => {
    return useQuery({
        queryKey: ['get-category'],
        queryFn: () => request.get('/category').then((res) => {
            return {
                obj: res.data,
                dataSize: res.headers.get('X-Total-Count')
            }
        })
    }
    )
}
