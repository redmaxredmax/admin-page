import { request } from "../../../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useGetPagination = (page = 1) => {
    return useQuery({
        queryKey: ['product-page', page],
        queryFn: () => request.get("/products", { params: { _limit: 5, _page: page } }).then((res) => {
            return {
                page: res.data,
                limit: res.config.params._limit,
                dataSize: res.headers.get('X-Total-Count')
            }
        })
    }

    )
}
