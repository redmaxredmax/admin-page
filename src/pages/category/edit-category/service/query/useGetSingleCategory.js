import { request } from "../../../../../config/request";
import { useQuery } from "@tanstack/react-query";


export const useGetSingleCategory = (id) => {
    return useQuery({
        queryKey: ['single-category',id],
        queryFn: () => request.get(`/category/${id}`).then((res) => res.data)
    }

    )
}
